import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from 'next-auth/client'
import theme from '../utils/theme'
import { LayoutProvider } from '../contexts/LayoutContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider session={pageProps.session}>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
