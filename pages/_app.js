import '../styles/global.scss'
import Head from 'next/head'
import SSRProvider from 'react-bootstrap/SSRProvider'
import { Layout } from '../components/layout'

export default function App({ Component, pageProps }) {
    return <SSRProvider>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>John Siddoway Blog: Maps and Gold</title>
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </SSRProvider>
}
