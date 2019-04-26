import { createMuiTheme } from '@material-ui/core/styles'

// look here for the colors: https://www.nordtheme.com/docs/colors-and-palettes

const colors = {
  nord00: '#2E3440', // dark grey
  nord01: '#3B4252', // lighter than ^
  nord02: '#434C5E', // lighter than ^
  nord03: '#4C566A', // light grey
  nord04: '#D8DEE9', // dark white
  nord05: '#E5E9F0', // mid white
  nord06: '#ECEFF4', // light white
  nord07: '#8FBCBB', // teal blue
  nord08: '#88C0D0', // light blue
  nord09: '#81A1C1', // pale blue
  nord10: '#5e81ac', // blue
  nord11: '#BF616A', // red
  nord12: '#D08770', // orange
  nord13: '#EBCB8B', // yellow
  nord14: '#A3BE8C', // green
  nord15: '#B48EAD', // purple
}


export const theme = createMuiTheme({
  palette: {
    action: {
      active: colors.nord04
    },
    primary: {
      main: colors.nord04
    },
    secondary: {
      main: colors.nord03
    },
    background: {
      paper: colors.nord00
    },
    text: {
      primary: colors.nord04
    }

  },
  typography: {
    fontFamily: 'Raleway, sans-serif',
    useNextVariants: true,
  },
})
