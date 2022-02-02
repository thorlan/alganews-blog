import '../styles/globals.css'
import type { AppProps as NextAppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light } from '../styles/theme'
import Error from "next/error"
import GlobalStyles from '../styles/globalStyles'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'

interface CustomAppProps extends NextPageProps {
  
}

//concatenando e sobescrevendo meu pageProps
type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, "pageProps">

function MyApp({ Component, pageProps }: AppProps<CustomAppProps>) {

  if(pageProps.error){
    return (
      <Error 
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    )
  }

  return (
    <ThemeProvider theme={light}>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
