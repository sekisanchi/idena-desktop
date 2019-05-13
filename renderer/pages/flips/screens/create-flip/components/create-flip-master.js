import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import {encode} from 'rlp'
import nanoid from 'nanoid'
import CreateFlipStep from './create-flip-step'
import {Box, SubHeading, Text} from '../../../../../shared/components'
import Flex from '../../../../../shared/components/flex'
import {
  FLIPS_STORAGE_KEY,
  appendToLocalStorage,
  FLIP_DRAFTS_STORAGE_KEY,
  getFromLocalStorage,
  setToLocalStorage,
} from '../../../utils/storage'
import theme from '../../../../../shared/theme'
import CreateFlipForm from './create-flip-form'
import FlipShuffle from './flip-shuffle'
import FlipHint from './flip-hint'
import {getRandomHint} from '../utils/hints'
import SubmitFlip from './submit-flip'
import {submitFlip} from '../../../../../shared/services/api'
import {toHex} from '../../../../../shared/utils/req'

const initialPics = [
  `https://placehold.it/480?text=1`,
  `https://placehold.it/480?text=2`,
  `https://placehold.it/480?text=3`,
  `https://placehold.it/480?text=4`,
]

function CreateFlipMaster({pics: savedPics, caption, id}) {
  const [pics, setPics] = useState(savedPics || initialPics)
  const [hint, setHint] = useState(
    (caption && caption.split('/')) || getRandomHint()
  )
  const [randomOrder, setRandomOrder] = useState([0, 1, 2, 3])

  const [submitFlipResult, setSubmitFlipResult] = useState()

  const [step, setStep] = useState(0)

  const handleSaveDraft = () => {
    if (id) {
      const drafts = getFromLocalStorage(FLIP_DRAFTS_STORAGE_KEY)
      const draftIdx = drafts.findIndex(d => d.id === id)

      setToLocalStorage(FLIP_DRAFTS_STORAGE_KEY, [
        ...drafts.slice(0, draftIdx),
        {
          id,
          caption: hint.join('/'),
          createdAt: Date.now(),
          pics,
        },
        ...drafts.slice(draftIdx + 1),
      ])
    } else {
      appendToLocalStorage(FLIP_DRAFTS_STORAGE_KEY, {
        id: nanoid(),
        caption: hint.join('/'),
        createdAt: Date.now(),
        pics,
      })
    }
    Router.replace('/flips')
  }

  const handleSubmitFlip = async () => {
    const arrayBuffers = pics.map(src => {
      const byteString = src.split(',')[1]
      return Uint8Array.from(atob(byteString), c => c.charCodeAt(0))
    })

    const hexBuff = encode([
      arrayBuffers.map(ab => new Uint8Array(ab)),
      [pics.map((_, i) => i), randomOrder],
    ])

    try {
      const response = await submitFlip(toHex(hexBuff))
      if (response.ok) {
        const {result, error} = await response.json()
        if (error) {
          setSubmitFlipResult(error.message)
        } else {
          appendToLocalStorage(FLIPS_STORAGE_KEY, {
            hash: result.hash,
            caption: hint.join('/'),
            createdAt: Date.now(),
          })
          setSubmitFlipResult(result.hash)
          Router.replace('/flips')
        }
      } else {
        setSubmitFlipResult(
          response.status === 413
            ? 'Maximum image size exceeded'
            : 'Unexpected error occurred'
        )
      }
    } catch (err) {
      setSubmitFlipResult(err)
    }
  }

  const steps = [
    {
      title: 'Choose the hints',
      desc: 'Choose key words',
      children: (
        <FlipHint hint={hint} onChange={() => setHint(getRandomHint())} />
      ),
    },
    {
      title: 'Create a story',
      desc: `Select 4 images to create a story with words: ${hint.join(',')}`,
      children: <CreateFlipForm pics={pics} onUpdateFlip={setPics} />,
    },
    {
      title: 'Shuffle images',
      children: (
        <FlipShuffle
          randomOrder={randomOrder}
          pics={pics}
          onShuffleFlip={setRandomOrder}
        />
      ),
    },
    {
      title: 'Submit story',
      children: (
        <SubmitFlip
          randomOrder={randomOrder}
          pics={pics}
          onSubmitFlip={handleSubmitFlip}
          submitFlipResult={submitFlipResult}
        />
      ),
    },
  ]

  return (
    <Box>
      <Flex>
        {steps.map(({title}, idx) => (
          <Flex
            key={title}
            align="center"
            css={{
              borderBottom: `solid 2px ${
                idx <= step ? theme.colors.primary : theme.colors.gray3
              }`,
              padding: theme.spacings.normal,
              paddingLeft: idx === 0 ? 0 : '',
            }}
          >
            <Text
              color={theme.colors.white}
              fontWeight={600}
              css={{
                background: theme.colors.primary,
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                textAlign: 'center',
                verticalAlign: 'middle',
                marginRight: theme.spacings.small,
              }}
            >
              {idx + 1}
            </Text>
            <SubHeading>{title}</SubHeading>
          </Flex>
        ))}
      </Flex>
      {
        steps.map(({title, desc, children}) => (
          <CreateFlipStep
            key={title}
            desc={desc}
            onSaveDraft={handleSaveDraft}
            onPrev={() => setStep(step - 1)}
            onNext={() => setStep(step + 1)}
          >
            {children}
          </CreateFlipStep>
        ))[step]
      }
    </Box>
  )
}

CreateFlipMaster.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  pics: PropTypes.arrayOf(PropTypes.string),
}

export default CreateFlipMaster