import { Html, Head, Main, NextScript } from 'next/document'
import { Footer, Navbar } from '../components'

export default function Document() {
  return (

    <Html lang="en">
      <Head>
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Exo+2|Fira+Code|Open+Sans|Source+Sans+Pro"/>
      </Head>
      <body>
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}