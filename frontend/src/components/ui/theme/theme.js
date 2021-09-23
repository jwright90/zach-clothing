import { createTheme } from '@material-ui/core/styles'

const green = "#99B898"
const darkGreen = "#708670"
const tan = "#FECEA8"
const lightRed = "#FF847C"
const red = "#E84A5F"
const offBlack = "2A363B"

const theme = createTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: darkGreen,
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700
    },

    purpleButton: {
      fontFamily: ""
    },

    body1: {

    },
  },
  overides: {}
});