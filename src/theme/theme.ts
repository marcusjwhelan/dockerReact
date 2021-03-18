import {createMuiTheme} from '@material-ui/core/styles'

// @ts-ignore
export const EXTheme = createMuiTheme({
  shape: {
    'borderRadius': 4
  },
  breakpoints: {
    'keys': ['xs', 'sm', 'md', 'lg', 'xl'],
    'values': {
      'xs': 0,
      'sm': 600,
      'md': 960,
      'lg': 1280,
      'xl': 1920
    }
  },
  // direction: 'ltr' | 'rtl',
  mixins: {
    toolbar: {
      height: 64,
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48
      },
      '@media (min-width:600px)': {
        height: 64,
        minHeight: 56
      }
    }
  },
  // components: {},
  palette: {
    common: {
      'black': '#000',
      'white': '#fff'
    },
    type: 'dark',
    contrastThreshold: 3,
    tonalOffset: 0.2,
    primary: {
      'main': '#116c8f',
      'light': '#279bc0',
      'dark': '#064d6e',
      'contrastText': '#fff'
    },
    secondary: {
      'main': '#ae007d',
      'light': '#ca53a0',
      'dark': '#82006e',
      'contrastText': '#fff'
    },
    error: {
      'light': '#ec7273',
      'main': '#ee3333',
      'dark': '#cf2026',
      'contrastText': '#fff'
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff'
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      'A700': '#616161',
      'A100': '#d5d5d5',
      'A400': '#303030',
      'A200': '#aaaaaa'
    },
    text: {
      primary: '#000',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.40)',
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    },
    background: {
      default: '#FEFEFE',
      paper: '#d7d7d7'
    }
    /**
     * HERE ADD YOUR CUSTOM COLOR PALETTES
     *
     * EXAMPLE:
     *
     * // @ts-ignore
     Custom_Red: {
            '50': '#ffebee',
            '100': '#ffcdd3',
            '200': '#f49a9a',
            '300': '#ec7273',
            '400': '#f7504f', // light
            '500': '#fc3e33',
            '600': '#ee3333',
            '700': '#dc282d',
            '800': '#cf2026', // red
            '900': '#c00e19'  // dark
        },
     */
  },
  // shadows: ? ,
  spacing: 0,
  transitions: {
    easing: {
      'easeInOut': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'easeOut': 'cubic-bezier(0.0, 0, 0.2, 1)',
      'easeIn': 'cubic-bezier(0.4, 0, 1, 1)',
      'sharp': 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      'standard': 300,
      'short': 250,
      'enteringScreen': 225,
      'shorter': 200,
      'leavingScreen': 195,
      'shortest': 150,
      'complex': 375
    }
  },
  typography: {
    fontFamily: '"Helvetica Light", "Roboto", "Arial", sans-serif',
    fontSize: 18,
    fontWeightLight: 500,
    fontWeightRegular: 600,
    fontWeightMedium: 700
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  overrides: {
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color'
        }
      }
    },
    MuiButton: {
      text: {
        color: 'white'
      }
    }
  }
})
