import "../styles/global.scss";
import Head from 'next/head'
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>John Siddoway Blog: Maps and Gold</title>
        </Head>
        <Component {...pageProps} />
    </>;
}
