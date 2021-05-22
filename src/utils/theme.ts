import { ChakraTheme, extendTheme, Theme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      color: mode('black', 'white')(props),
      bg: mode('white', 'black')(props),
      fontFamily: "Nunito, sans-serif"
    }
  })
};

const theme: ChakraTheme = extendTheme({
  colorModeManager: "dark",
  styles,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },
  colors: {
    primary: {
      100: "#7159c1",
      200: "#9b2eff"
    },
    cardbg: "#2d2e30",

  },
  fonts: {
    fontFamily: "Nunito, sans-serif"
  }
})

export default theme
