import Head from 'next/head'
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>John Siddoway Blog: Maps and Gold</title>
        </Head>
        <Component {...pageProps} />
    </>;
}