import React from 'react'
import {theme as chakraTheme} from '@chakra-ui/core'
import {rem as remp, rgb, margin} from 'polished'

const colors = {
  primary: 'rgb(87, 143, 255)',
  primary2: 'rgb(83, 86, 92)',
  text: 'rgb(83, 86, 92)',
  muted: 'rgb(150, 153, 158)',
  gray: 'rgb(245, 246, 247)',
  gray2: 'rgb(232, 234, 237)',
  gray3: 'rgba(83, 86, 92, 0.3)',
  gray4: 'rgb(210, 212, 217)',
  gray5: rgb(64, 64, 64),
  white: 'rgb(255, 255, 255)',
  white05: 'rgba(255, 255, 255, 0.5)',
  white01: 'rgba(255, 255, 255, 0.1)',
  danger: 'rgb(255, 102, 102)',
  danger02: 'rgba(255, 102, 102, 0.2)',
  warning: 'rgb(255, 163, 102)',
  warning02: 'rgba(255, 163, 102, 0.2)',
  warning04: 'rgba(255, 163, 102, 0.4)',
  success: 'rgb(39, 217, 128)',
  success02: 'rgba(39, 217, 128, 0.2)',
  success04: 'rgb(39, 217, 128, 0.4)',
  black: 'rgb(17,17,17)',
  black0: 'rgb(0,0,0)',
  darkGraphite: 'rgb(69 72 77)',
}

const baseFontSize = 16

const fontSizes = {
  base: baseFontSize,
  heading: rem(28),
  subHeading: rem(18),
  normal: rem(13),
  small: '0.72rem',
  medium: '1.2rem',
  large: '1.4em',
}

const fontWeights = {
  normal: 400,
  medium: 500,
  semi: 600,
  bold: 700,
}

const spacings = {
  xxsmall: '0.1em',
  small: '0.5em',
  small8: 8,
  small12: 12,
  normal: '1em',
  medium16: 16,
  medium24: 24,
  medium32: 32,
  large: 80,
  large48: 48,
  xlarge: '2em',
  xxlarge: '3em',
  xxxlarge: '4em',
}

export default {
  colors,
  spacings,
  fontSizes,
  fontWeights,
  Box: {
    w: '',
    bg: '',
  },
  Flex: {
    direction: 'initial',
    justify: 'initial',
    align: 'initial',
  },
  Heading: {
    color: colors.text,
    fontSize: fontSizes.heading,
    fontWeight: 500,
    lineHeight: rem(32),
    ...margin(0),
  },
  SubHeading: {
    color: colors.text,
    fontSize: fontSizes.subHeading,
    fontWeight: 500,
    lineHeight: rem(24),
    ...margin(0),
  },
  Text: {
    color: colors.text,
    fontSize: fontSizes.normal,
    fontWeight: fontWeights.normal,
    lineHeight: rem(20),
  },
  Link: {
    color: colors.text,
    fontSize: fontSizes.normal,
    fontWeight: fontWeights.normal,
    textDecoration: 'none',
  },
  Button: {
    color: colors.text,
    size: fontSizes.normal,
  },
}

export function rem(value) {
  return remp(value, baseFontSize)
}

const breakpoints = ['40em', '52em', '64em']

export const uiTheme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: '#16161D',
    blue: {
      ...chakraTheme.colors.blue,
      200: '#578fff',
      300: 'rgba(87, 143, 255, .12)',
      500: 'rgb(87, 143, 255)',
    },
    gray: {
      ...chakraTheme.colors.gray,
      10: 'rgba(255,255,255,0.1)',
      50: 'rgb(245, 246, 247)',
      100: 'rgb(210, 212, 217)',
      200: '#53565c',
      300: 'rgb(232, 234, 237)',
      500: 'rgba(255,255,255,0.5)',
    },
    red: {
      ...chakraTheme.colors.red,
      '010': 'rgb(255 102 102 /0.10)',
      '012': 'rgb(255 102 102 /0.12)',
      '020': 'rgb(255 102 102 /0.20)',
      '050': 'rgb(255 102 102 /0.50)',
      500: 'rgb(255, 102, 102)',
    },
    green: {
      ...chakraTheme.colors.green,
      '010': 'rgb(39 217 128 /.1)',
      '050': 'rgb(39 217 128 /.5)',
      500: 'rgb(39 217 128)',
    },
    warning: {
      '016': 'rgba(255, 163, 102, 0.16)',
      100: 'rgba(255, 163, 102, 0.2)',
      400: 'rgb(255, 163, 102)',
      500: 'rgb(255, 163, 102)',
    },
    success: {
      '016': 'rgba(39, 217, 128, 0.16)',
      100: 'rgba(39, 217, 128, 0.2)',
      400: 'rgb(39, 217, 128)',
    },
    muted: 'rgb(150, 153, 158)',
    brand: {
      gray: 'rgb(83, 86, 92)',
      blue: 'rgb(87, 143, 255)',
    },
    brandGray: {
      '016': 'rgb(83, 86, 92, 0.16)',
      500: 'rgb(83, 86, 92)',
    },
    brandBlue: {
      10: 'rgba(87, 143, 255, 0.12)',
      20: 'rgba(87, 143, 255, 0.24)',
      '025': 'rgba(87, 143, 255, 0.25)',
      50: 'rgba(87, 143, 255, 0.24)',
      100: '#578fff',
      200: '#578fff',
      300: '#447ceb',
      400: '#447ceb',
      500: 'rgb(87 143 255)',
      600: '#447ceb',
      700: '#447ceb',
    },
    xblack: {
      '016': 'rgb(0 0 0 /0.2)',
      '080': 'rgb(0 0 0 /0.8)',
    },
    xwhite: {
      '050': 'rgba(255, 255, 255, 0.5)',
    },
    graphite: {
      500: 'rgb(69 72 77)',
    },
  },
  fonts: {
    ...chakraTheme.fonts,
    body: ['Inter', chakraTheme.fonts.body].join(', '),
    heading: ['Inter', chakraTheme.fonts.heading].join(', '),
  },
  fontSizes: {
    ...chakraTheme.fontSizes,
    sm: '11px',
    md: '13px',
    mdx: '14px',
    lg: '18px',
    xl: '28px',
  },
  breakpoints,
  space: {
    ...chakraTheme.space,
    '1/2': '2px',
    '3/2': '6px',
  },
  radii: {
    ...chakraTheme.radii,
    md: rem(6),
    xl: '0.75rem',
  },
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58">
          <defs>
            <filter
              id="a"
              width="108.9%"
              height="108.9%"
              x="-4.5%"
              y="-4.5%"
              filterUnits="objectBoundingBox"
            >
              <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
                stdDeviation=".5"
              />
              <feColorMatrix
                in="shadowBlurOuter1"
                result="shadowMatrixOuter1"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
              />
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g fill="none" filter="url(#a)" transform="translate(1 1)">
            <path
              fill="#FFF"
              d="M27.974 55.949C12.55 55.949 0 43.399 0 27.974S12.55 0 27.974 0C43.4 0 55.95 12.549 55.95 27.974S43.399 55.95 27.974 55.95"
            />
            <path
              fill="#000"
              d="M27.974 40.278c-2.55 0-3.996-1.435-4.618-2.264 1.013-.528 2.53-1.195 3.09-1.428.132-.056.384.008.657.166.28.161.602.213.823.228a.7.7 0 00.097 0c.22-.015.543-.067.822-.228.273-.158.525-.222.657-.166.56.233 2.075.9 3.088 1.426a5.665 5.665 0 01-4.616 2.266m6.004-3.123c-.994-.62-3.388-1.662-3.927-1.887-.565-.235-1.228-.15-1.918.247a.572.572 0 01-.159.037.566.566 0 01-.158-.037c-.69-.397-1.353-.482-1.918-.247-.54.225-2.933 1.267-3.927 1.887a.713.713 0 00-.262.922c.074.148 1.847 3.628 6.265 3.628 4.419 0 6.192-3.48 6.265-3.628a.713.713 0 00-.261-.922m3.826-13.958h-4.416a2.636 2.636 0 012.622-2.404h4.416a2.636 2.636 0 01-2.622 2.404m3.346-3.83h-5.14a4.064 4.064 0 00-4.06 4.059v.485c0 .394.32.713.714.713h5.14c2.238 0 4.06-1.82 4.06-4.059v-.485a.713.713 0 00-.714-.714m-23.006 3.831a2.636 2.636 0 01-2.622-2.404h4.417a2.636 2.636 0 012.622 2.404h-4.417zm5.854.714v-.485a4.064 4.064 0 00-4.06-4.06h-5.14a.713.713 0 00-.713.714v.485a4.065 4.065 0 004.06 4.06h5.14c.393 0 .713-.32.713-.714zM30.03 42.72h-4.572a.713.713 0 100 1.428h4.573a.713.713 0 100-1.427"
            />
            <path
              fill="#000"
              d="M25.674 38.26c0 .394.32.713.714.713h3.173a.713.713 0 100-1.427h-3.173a.713.713 0 00-.714.714"
            />
            <path
              fill="#000"
              d="M51.789 26.692l-3.2-3.703c-.742-.86-.742-2.31 0-3.17l.323-.374 3.97 4.594c.2 1.283.306 2.597.306 3.935 0 .111-.003.222-.004.333l-1.395-1.615zm.754 6.973l-.754-.872-3.2-3.704c-.742-.86-.742-2.31 0-3.17l.323-.374 4.162 4.818a25.144 25.144 0 01-.531 3.302zm-1.461 4.409l-1.668-1.93-.825-.955c-.742-.859-.742-2.31 0-3.17l.323-.374 3.184 3.686a25.025 25.025 0 01-1.014 2.743zm-2.012 3.711c-.75-1.186-.786-2.79-.136-4.014l1.48 1.712c-.408.793-.857 1.56-1.344 2.302zm-4.2 4.905V9.259a25.37 25.37 0 012.953 3.165l-.313.362c-1.22 1.411-1.22 3.623 0 5.035l.46.533-.46.532c-1.22 1.412-1.22 3.624 0 5.035l.46.533-.46.532c-1.22 1.412-1.22 3.624 0 5.036l.46.532-.46.533c-1.22 1.411-1.22 3.623 0 5.035l.447.517c-1.238 1.819-1.226 4.382.098 6.19a.7.7 0 00.175.163 25.362 25.362 0 01-3.36 3.698zm-1.427-36.473c0 .244-.016.484-.043.72-4.234-3.841-9.668-5.944-15.425-5.944-5.763 0-11.19 2.104-15.424 5.947a6.231 6.231 0 01-.043-.723V8.062a25.103 25.103 0 0115.467-5.301c5.83 0 11.197 1.98 15.468 5.301v2.155zM21.03 7.563a21.59 21.59 0 016.944-1.143c2.418 0 4.774.4 6.996 1.16-2.033 1.85-4.475 2.862-6.96 2.862-2.495 0-4.943-1.018-6.98-2.879zm22.412 15.46v.073c0 3.134-1.723 6.193-4.728 8.393a.714.714 0 10.843 1.152c1.666-1.22 2.98-2.686 3.885-4.29v.008c0 4.75-1.793 9.271-5.048 12.73l-5.185 5.508a7.216 7.216 0 01-5.235 2.262 7.216 7.216 0 01-5.235-2.262l-5.184-5.508a18.505 18.505 0 01-5.048-12.73v-.008c.905 1.604 2.218 3.07 3.885 4.29a.71.71 0 00.997-.154.714.714 0 00-.154-.998c-3.005-2.2-4.728-5.259-4.728-8.393v-8.44a7.635 7.635 0 006.214 3.203h1.007a5.784 5.784 0 015.777 5.778v6.9a.713.713 0 101.427 0v-6.9c0-3.973-3.232-7.205-7.204-7.205H18.72a6.223 6.223 0 01-5.768-3.907 21.498 21.498 0 016.6-4.403c2.394 2.417 5.385 3.747 8.457 3.747 3.06 0 6.043-1.322 8.433-3.723a21.507 21.507 0 016.553 4.378 6.224 6.224 0 01-5.769 3.908H36.22c-3.973 0-7.205 3.232-7.205 7.205v6.9a.713.713 0 101.427 0v-6.9a5.784 5.784 0 015.778-5.778h1.006a7.635 7.635 0 006.215-3.203v8.368zm0 24.863c-.38.296-.77.58-1.167.855V38.337a.705.705 0 00-.01-.103 19.84 19.84 0 001.177-2.444v12.096zm-2.594 1.77a25.71 25.71 0 01-1.29.718v-8.446c.458-.496.888-1.013 1.29-1.546v9.274zm-2.718 1.4c-.424.188-.854.363-1.29.527v-6.76l1.29-1.372v7.606zm-2.718 1.016a25.21 25.21 0 01-7.438 1.116c-2.58 0-5.07-.389-7.414-1.109v-5.715l1.14 1.211a8.648 8.648 0 006.274 2.711 8.649 8.649 0 006.274-2.71l1.164-1.237v5.733zm-16.28-.48a25.112 25.112 0 01-1.29-.525v-7.591l1.29 1.371v6.745zm-2.717-1.205a25.173 25.173 0 01-1.291-.717v-9.257c.403.532.832 1.047 1.29 1.542v8.432zm-2.718-12.05v10.42a25.175 25.175 0 01-1.19-.871V35.79c.34.852.74 1.681 1.197 2.48-.002.023-.007.044-.007.067zM11.08 23.024v23.665a25.35 25.35 0 01-3.36-3.697.698.698 0 00.174-.163c1.324-1.807 1.337-4.371.099-6.19l.446-.517c1.22-1.412 1.22-3.624 0-5.035l-.46-.533.46-.532c1.22-1.412 1.22-3.624 0-5.036l-.46-.532.46-.533c1.22-1.411 1.22-3.623 0-5.035l-.46-.532.46-.533c1.22-1.412 1.22-3.624 0-5.035l-.313-.362a25.363 25.363 0 012.954-3.165v13.765zM6.878 41.785a25.152 25.152 0 01-1.343-2.302l.794-.919.686-.793c.65 1.224.613 2.828-.137 4.014zm-3.026-6.454l3.184-3.686.324.375c.742.858.742 2.31 0 3.169l-.826.955-1.667 1.93a25.024 25.024 0 01-1.015-2.743zm-.978-4.968l4.162-4.818.324.374c.742.86.742 2.31 0 3.17l-.863.999-1.274 1.474-1.063 1.23-.754.873a25.18 25.18 0 01-.532-3.302zm-.113-2.389c0-1.338.105-2.652.306-3.934l3.97-4.595.323.374c.742.86.742 2.31 0 3.17l-.863.998-3.732 4.32c-.002-.111-.004-.222-.004-.333zm4.497-14.373l.102.118c.742.859.742 2.31 0 3.17l-2.45 2.832-1.207 1.397A25.105 25.105 0 017.257 13.6zm41.331.118l.102-.118a25.102 25.102 0 013.553 7.518l-.455-.527-3.2-3.704c-.742-.859-.742-2.31 0-3.17zM27.974 1.427c-14.638 0-26.547 11.91-26.547 26.547 0 14.638 11.91 26.548 26.547 26.548 14.639 0 26.548-11.91 26.548-26.548 0-14.638-11.91-26.547-26.548-26.547z"
            />
          </g>
        </svg>
      ),
      viewBox: '0 0 58 58',
    },
    profile: {
      path: (
        <path
          fill="currentColor"
          d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 11a5.99 5.99 0 0 0-4.662 2.222A6.974 6.974 0 0 0 10 17c1.79 0 3.424-.672 4.661-1.778A5.988 5.988 0 0 0 10 13zm0-7.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    contacts: {
      path: (
        <path
          fill="currentColor"
          d="M14 12c2.21 0 4 1.79 4 4v1.026h-8V16c0-2.21 1.79-4 4-4zM7 9.5c1.782 0 3.346.932 4.232 2.336-1.282.854-2.147 2.283-2.226 3.917L9 16v.999H2V14.5c0-2.761 2.239-5 5-5zm7-4c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zM7 2c1.657 0 3 1.343 3 3S8.657 8 7 8 4 6.657 4 5s1.343-3 3-3z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    settings: {
      path: (
        <path
          fill="currentColor"
          d="M10.5 2a.5.5 0 0 1 .5.5v1.583a5.968 5.968 0 0 1 2.476 1.026l1.12-1.12a.5.5 0 0 1 .707 0l.707.708a.5.5 0 0 1 0 .707l-1.119 1.12A5.968 5.968 0 0 1 15.917 9H17.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.583a5.968 5.968 0 0 1-1.026 2.476l1.12 1.12a.5.5 0 0 1 0 .707l-.708.707a.5.5 0 0 1-.707 0l-1.12-1.119A5.968 5.968 0 0 1 11 15.917L11 17.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.583a5.968 5.968 0 0 1-2.476-1.026l-1.12 1.12a.5.5 0 0 1-.707 0l-.707-.708a.5.5 0 0 1 0-.707l1.119-1.12A5.968 5.968 0 0 1 4.083 11L2.5 11a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1.583a5.968 5.968 0 0 1 1.026-2.476l-1.12-1.12a.5.5 0 0 1 0-.707l.708-.707a.5.5 0 0 1 .707 0l1.12 1.119A5.968 5.968 0 0 1 9 4.083V2.5a.5.5 0 0 1 .5-.5h1zM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    gallery: {
      path: (
        <path
          d="M3.282 4h4.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v9.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H3.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V5.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zm9 0h4.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v9.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134h-4.436c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V5.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134z"
          fill="currentColor"
        />
      ),
      viewBox: '0 0 20 20',
    },
    wallet: {
      path: (
        <path
          fill="currentColor"
          d="M14.154 3c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31V7h-4.49c-.758 0-1.102.078-1.405.225l-.082.042c-.326.174-.582.43-.756.756-.16.299-.251.605-.265 1.29L11 9.509v.982c0 .826.093 1.16.267 1.486.174.326.43.582.756.756.299.16.605.251 1.29.265l.196.002H18v.154c0 1.337-.14 1.822-.4 2.311a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401h-8.31c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 2.4 15.464c-.262-.489-.401-.974-.401-2.31v-6.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 3.536 3.4C4.024 3.139 4.509 3 5.845 3h8.31zM14 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    'add-user': {
      path: (
        <path
          fill="currentColor"
          d="M16 4h2v2h-2v2h-2V6h-2V4h2V2h2v2zM5.205 13h5.59c1.115 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926V18H2v-1.795c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945.407-.218.811-.334 1.926-.334zM8 11.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    photo: {
      path: (
        <path
          fill="currentColor"
          d="M12 4a2 2 0 0 1 2 2h1a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a2 2 0 0 1 2-2h4zm-2 3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM10 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    key: {
      path: (
        <path
          fill="currentColor"
          d="M11.85 17.56a1.5 1.5 0 0 1-1.06.44H10v.5c0 .83-.67 1.5-1.5 1.5H8v.5c0 .83-.67 1.5-1.5 1.5H4a2 2 0 0 1-2-2v-2.59A2 2 0 0 1 2.59 16l5.56-5.56A7.03 7.03 0 0 1 15 2a7 7 0 1 1-1.44 13.85l-1.7 1.71zm1.12-3.95l.58.18a5 5 0 1 0-3.34-3.34l.18.58L4 17.4V20h2v-.5c0-.83.67-1.5 1.5-1.5H8v-.5c0-.83.67-1.5 1.5-1.5h1.09l2.38-2.39zM18 9a1 1 0 0 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3z"
        />
      ),
    },
    delete: {
      path: (
        <path
          fill="currentColor"
          d="M8.586 10L6.293 7.707l1.414-1.414L10 8.586l2.293-2.293 1.414 1.414L11.414 10l2.293 2.293-1.414 1.414L10 11.414l-2.293 2.293-1.414-1.414L8.586 10zM10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    more: {
      path: (
        <path
          fill="currentColor"
          d="M10 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    edit: {
      path: (
        <path
          fill="currentColor"
          d="M8.202 16.084l-4.243.707.707-4.243 3.536 3.536zm5.657-9.9l-7.071 7.071-1.415-1.414 7.072-7.071 1.414 1.414zm2.121 2.121L8.91 15.377l-1.414-1.415 7.07-7.07 1.415 1.413zm1.19-4.466c.42.42.619.75.726 1.103.107.354.107.716 0 1.07-.107.353-.305.683-.725 1.103l-.484.483-3.535-3.535.483-.484c.42-.42.75-.618 1.103-.725a1.817 1.817 0 0 1 1.07 0c.353.107.683.305 1.103.725l.26.26z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    send: {
      path: (
        <g fill="currentColor">
          <path fill="currentColor" fillOpacity="0" d="M0 0h20v20H0z" />
          <path
            fill="currentColor"
            d="M6.239 9H10.5v2H6.239l-1.123 3.647L15.126 10 5.115 5.353 6.24 9zm-1.785 1l-1.91-6.206c-.254-.828.592-1.566 1.377-1.201l14 6.5a1 1 0 0 1 0 1.814l-14 6.5c-.785.365-1.631-.373-1.377-1.201L4.454 10z"
          />
        </g>
      ),
      viewBox: '0 0 20 20',
    },
    open: {
      path: (
        <path
          fill="currentColor"
          d="M18 12v1.154c0 1.37-.134 2.063-.519 2.783a3.726 3.726 0 0 1-1.544 1.544c-.72.385-1.413.519-2.783.519H12v-2h1.154c1.068 0 1.449-.073 1.84-.283.314-.168.555-.409.723-.723.21-.391.283-.772.283-1.84V12h2zM4 12v1.154c0 1.068.073 1.449.283 1.84.168.314.409.555.723.723.391.21.772.283 1.84.283H8v2H6.846c-1.37 0-2.063-.134-2.783-.519a3.726 3.726 0 0 1-1.544-1.544C2.134 15.217 2 14.524 2 13.154V12h2zM8 2v2H6.846c-1.068 0-1.449.073-1.84.283-.314.168-.555.409-.723.723-.21.391-.283.772-.283 1.84V8H2V6.846c0-1.37.134-2.063.519-2.783A3.726 3.726 0 0 1 4.063 2.52C4.783 2.134 5.476 2 6.846 2H8zm5.154 0c1.37 0 2.063.134 2.783.519.663.355 1.19.881 1.544 1.544.385.72.519 1.413.519 2.783V8h-2V6.846c0-1.068-.073-1.449-.283-1.84a1.726 1.726 0 0 0-.723-.723c-.391-.21-.772-.283-1.84-.283H12V2h1.154z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    upload: {
      path: (
        <path
          fill="currentColor"
          d="M10 6l3 4h-2v7H9v-7H7l3-4zm3.368-3c1.188 0 1.934.186 2.586.534.652.349 1.163.86 1.512 1.512.348.652.534 1.398.534 2.586v.736c0 1.188-.186 1.934-.534 2.586a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.398.534-2.586.534H13v-2h.368c.821 0 1.265-.096 1.642-.298.304-.162.53-.388.692-.692.202-.377.298-.82.298-1.642v-.736c0-.821-.096-1.265-.298-1.642a1.635 1.635 0 0 0-.692-.692C14.633 5.096 14.19 5 13.368 5H6.632c-.821 0-1.265.096-1.642.298-.304.162-.53.388-.692.692C4.096 6.367 4 6.81 4 7.632v.736c0 .821.096 1.265.298 1.642.162.304.388.53.692.692.377.202.82.298 1.642.298H7v2h-.368c-1.188 0-1.934-.186-2.586-.534a3.635 3.635 0 0 1-1.512-1.512C2.186 10.302 2 9.556 2 8.368v-.736c0-1.188.186-1.934.534-2.586a3.635 3.635 0 0 1 1.512-1.512C4.698 3.186 5.444 3 6.632 3z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    plus: {
      path: (
        <path
          fill="currentColor"
          d="M12.872 2c1.783 0 2.43.186 3.082.534.652.349 1.163.86 1.512 1.512.348.652.534 1.299.534 3.082v5.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534a3.635 3.635 0 0 1-1.512-1.512C2.186 15.302 2 14.655 2 12.872V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C4.698 2.186 5.345 2 7.128 2h5.744zm.238 2H7.128c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.206.385-.288.764-.297 1.9L4 12.872c0 1.324.078 1.727.298 2.138.162.304.388.53.692.692.411.22.814.298 2.138.298h5.744c1.324 0 1.727-.078 2.138-.298.304-.162.53-.388.692-.692.22-.411.298-.814.298-2.138V7.128c0-1.324-.078-1.727-.298-2.138a1.635 1.635 0 0 0-.692-.692c-.385-.206-.764-.288-1.9-.297zM11 6v3h3v2h-3v3H9v-3H6V9l3-.001V6h2z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    'plus-solid': {
      path: (
        <g fill="none">
          <path
            fill="currentColor"
            d="M3.846 0h8.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v8.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401h-8.31c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 .4 14.464C.139 13.976 0 13.491 0 12.155v-8.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 1.536.4C2.024.139 2.509 0 3.845 0z"
          />
          <g fill="#FFF">
            <path d="M7 4h2v8H7z" />
            <path d="M12 7v2H4V7z" />
          </g>
        </g>
      ),
      viewBox: '0 0 16 16',
    },
    info: {
      path: (
        <path
          fill="currentColor"
          d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM9 9h2v5H9V9zm0-3h2v2H9V6z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    'info-solid': {
      path: (
        <path
          fill="currentColor"
          d="M10 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm1 10H9v2h2v-2zm0-6H9v5h2V6z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    clock: {
      path: (
        <path
          fill="currentColor"
          d="M10 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm1 4.025H9v4.373l2.905 3.072 1.453-1.374L11 9.602V6.025z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    gtranslate: {
      path: (
        <path
          fill="currentColor"
          d="M7.022 7c.065.715.266 1.39.578 2H7v1H5v1h1v1h1v-1h1v1h1v-1h.337a5.47 5.47 0 002.663.978V15a1 1 0 01-1 1H5l-2 2V8a1 1 0 011-1h3.022zM9 13H8v1h1v-1zm-2 0H6v1h1v-1zm1-1H7v1h1v-1zm4.5-10a4.5 4.5 0 013.722 7.03l-.129 3.056-.013.31-3.108-1.42A4.5 4.5 0 1112.5 2zM14 4h-3v5h1V7h1v2h1V4zm-1 1v1h-1V5h1z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    refresh: {
      path: (
        <path
          fill="currentColor"
          d="M12.717 6.79a5 5 0 1 0 2.29 4.203h2a7 7 0 1 1-2.853-5.64L16.507 3v6h-6l2.21-2.21z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    pic: {
      path: (
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M15.984 13.871c.011-.178.016-.408.016-.717V6.846c0-.917-.043-1.142-.164-1.368a.727.727 0 0 0-.314-.314c-.226-.12-.45-.164-1.368-.164H5.846c-.917 0-1.142.043-1.368.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368v6.308c0 .917.043 1.142.164 1.368.033.061.07.114.113.161L7.5 11l2.021 2.31L12.5 10l3.484 3.871zM5.846 3h8.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v6.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401h-8.31c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 2.4 15.464c-.262-.489-.401-.974-.401-2.31v-6.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 3.536 3.4C4.024 3.139 4.509 3 5.845 3zM7.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    google: {
      path: (
        <g fill="none" fillRule="evenodd">
          <path
            fill="currentColor"
            d="M10 18c-4.411 0-8-3.589-8-8s3.589-8 8-8c2.312 0 4.509 1 6.03 2.743l-1.507 1.315C13.382 4.75 11.733 4 10 4c-3.309 0-6 2.691-6 6s2.691 6 6 6c2.968 0 5.439-2.166 5.917-5H10V9h8v1c0 4.411-3.589 8-8 8"
          />
        </g>
      ),
      viewBox: '0 0 20 20',
    },
    folder: {
      path: (
        <g fill="none" fillRule="evenodd">
          <path d="M0 0L20 0 20 20 0 20z" />
          <path
            fill="currentColor"
            d="M7.379 3c.658 0 1.302.267 1.767.732l1.122 1.122c.093.093.222.146.353.146H15.5C16.878 5 18 6.122 18 7.5v7c0 1.378-1.122 2.5-2.5 2.5h-11C3.122 17 2 15.878 2 14.5v-9C2 4.122 3.122 3 4.5 3zm0 2H4.5c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-7c0-.276-.224-.5-.5-.5h-4.879c-.658 0-1.302-.267-1.767-.732L7.732 5.146C7.639 5.053 7.51 5 7.379 5zM7 10c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
          />
        </g>
      ),
      viewBox: '0 0 20 20',
    },
    'add-image': {
      path: (
        <g fill="none" fillRule="evenodd">
          <path
            fill="#FFF"
            d="M0 0H1080V700H0z"
            transform="translate(-626 -570)"
          />
          <g>
            <path
              fill="currentColor"
              d="M11 2v2H4.5c-.276 0-.5.224-.5.5v8.944l6.99-3.883c.625-.347 1.387-.334 2.001.033L16 11.4V9h2v6.5c0 1.378-1.122 2.5-2.5 2.5h-11C3.122 18 2 16.878 2 15.5v-11C2 3.122 3.122 2 4.5 2H11zM7 5.5c.829 0 1.5.671 1.5 1.5S7.829 8.5 7 8.5 5.5 7.829 5.5 7 6.171 5.5 7 5.5zM17 1v2h2v2h-2v2h-2V5h-2V3h2V1h2z"
              transform="translate(-626 -570) translate(626 570)"
            />
          </g>
        </g>
      ),
      viewBox: '0 0 20 20',
    },
    ok: {
      path: (
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M8.27 12.532L5.203 9.499l-1.406 1.423 4.6 4.546 8.364-9.82-1.522-1.296z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    switch: {
      path: (
        <g fill="none" fillRule="evenodd">
          <path
            fill="currentColor"
            d="M10 4c4.345 0 8 2.089 8 5 0 1.655-1.181 3.044-2.999 3.935v-2.329C15.636 10.124 16 9.563 16 9c0-1.507-2.613-3-6-3S4 7.493 4 9c0 1.193 1.637 2.377 4 2.819V9l5 4-5 4v-3.152C4.59 13.318 2 11.451 2 9c0-2.911 3.655-5 8-5z"
          />
        </g>
      ),
      viewBox: '0 0 20 20',
    },
    community: {
      path: (
        <path
          fill="currentColor"
          d="M6 6c2.142 0 3.891 1.684 3.995 3.8L10 10l.9 1.2c.166.22.12.534-.1.7-.087.065-.192.1-.3.1H10v2.5c0 .276-.224.5-.5.5H8v2H3v-4.354C2.378 11.94 2 11.014 2 10c0-2.21 1.79-4 4-4zm11-3c.552 0 1 .448 1 1v3c0 .552-.448 1-1 1h-3l-2 1.5V4c0-.552.448-1 1-1h4z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    'chevron-down': {
      path: (
        <g fill="currentColor" fillRule="evenodd">
          <path
            fillRule="nonzero"
            d="M5.354 7.646L4.646 8.354 10 13.707 15.354 8.354 14.646 7.646 10 12.293z"
          />
        </g>
      ),
      viewBox: '0 0 20 20',
    },
    upvote: {
      path: (
        <path
          fill="currentColor"
          d="M5 18c-1.657 0-3-1.343-3-3v-4c0-1.657 1.343-3 3-3h1.352l1.2-4.342c.48-.956 1.427-1.581 2.485-1.651l.2-.007h.263c1.325 0 2.41 1.032 2.495 2.336L13 4.5V8h1.998c.198 0 .395.02.589.058 1.566.314 2.602 1.794 2.383 3.357l-.03.173-1.2 4c-.269 1.344-1.41 2.327-2.764 2.407l-.178.005H5zm1-8H5c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h1v-6zm4.5-6h-.264c-.29 0-.56.125-.747.335l-.074.095-1.17 4.233c-.035.125-.082.246-.14.362-.051.104-.085.216-.098.331L8 9.472V16h5.858c.437 0 .818-.283.951-.69l.075-.296 1.166-3.886.008-.119c.005-.47-.325-.894-.804-.99l-.097-.014-.099-.005H13c-1.054 0-1.918-.816-1.995-1.85L11 8V4.5c0-.245-.177-.45-.41-.492L10.5 4z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    undo: {
      path: (
        <path
          fill="currentColor"
          d="M8 11L3 7l5-4v3h4c2.689 0 4.882 2.122 4.995 4.783L17 11c0 2.761-2.239 5-5 5H8v-2h4c1.657 0 3-1.343 3-3s-1.343-3-3-3H8v3z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    redo: {
      path: (
        <path
          fill="currentColor"
          d="M12 11l5-4-5-4v3H8c-2.689 0-4.882 2.122-4.995 4.783L3 11c0 2.761 2.239 5 5 5h4v-2H8c-1.657 0-3-1.343-3-3s1.343-3 3-3h4v3z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    crop: {
      path: (
        <path
          fill="currentColor"
          d="M6.5 14c-.276 0-.5-.224-.5-.5V6h7.607c.213 0 .393.229.393.5V14H6.5zM18 14h-2V6.5C16 5.122 14.926 4 13.607 4H6V2H4v2H2v2h2v7.5C4 14.878 5.122 16 6.5 16H14v2h2v-2h2v-2z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    draw: {
      path: (
        <path
          fill="currentColor"
          d="M7.01 16.084l-4.242.707.707-4.243 3.535 3.536zm5.657-9.9l-7.07 7.071-1.415-1.414 7.071-7.071 1.414 1.414zm2.122 2.121l-7.071 7.072-1.415-1.415 7.071-7.07 1.415 1.413zm1.19-4.466c.42.42.618.75.726 1.103.107.354.107.716 0 1.07-.108.353-.306.683-.726 1.103l-.483.483-3.536-3.535.484-.484c.42-.42.75-.618 1.103-.725.354-.107.715-.107 1.07 0 .353.107.682.305 1.102.725l.26.26z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    'flip-editor-delete': {
      path: (
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M11 2c.552 0 1 .448 1 1v1h4c.552 0 1 .448 1 1s-.448 1-1 1h-.072l-.761 10.15c-.075.991-.863 1.769-1.84 1.844l-.155.006H6.828c-1.047 0-1.916-.807-1.995-1.85L4.071 6H4c-.552 0-1-.448-1-1s.448-1 1-1h4V3c0-.552.448-1 1-1h2zm2.921 4H6.078l.75 10h6.344l.749-10z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    cycle: {
      path: (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14 8l3 4-2 .001V13a5 5 0 0 1-9.9 1h2.07a3.001 3.001 0 0 0 5.825-.824L13 13v-1h-2l3-4zm-4-6a5.002 5.002 0 0 1 4.9 4h-2.07a3.001 3.001 0 0 0-5.825.824L7 7v1h2l-3 4-3-4 2-.001V7a5 5 0 0 1 5-5z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    clipboard: {
      path: (
        <path
          fill="currentColor"
          d="M16 15.5c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-10c0-.276.224-.5.5-.5H6v1c0 .552.448 1 1 1h6c.552 0 1-.448 1-1V5h1.5c.276 0 .5.224.5.5v10zM10 3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm5.5 0h-2.684C12.403 1.837 11.304 1 10 1c-1.304 0-2.403.837-2.816 2H4.5C3.122 3 2 4.122 2 5.5v10C2 16.878 3.122 18 4.5 18h11c1.378 0 2.5-1.122 2.5-2.5v-10C18 4.122 16.878 3 15.5 3z"
        />
      ),
      viewBox: '0 0 20 20',
    },
  },
}
