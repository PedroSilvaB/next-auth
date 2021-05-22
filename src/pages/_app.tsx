import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from 'next-auth/client'
import theme from '../utils/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
