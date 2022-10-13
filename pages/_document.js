import { Html, Head, Main, NextScript } from 'next/document'
import { Footer, Header } from '../components'
import Container from 'react-bootstrap/Container';

export default function Document() {
    return <Html lang="en" className="h-100">
        <Head>
            <link rel="icon" href="/favicon.png" type="image/png" />
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Exo+2|Fira+Code|Open+Sans|Source+Sans+Pro" />
            <meta name="description" content="John Siddoway Blog" />
            <meta name="og:title" content="John Siddoway Blog: Maps and Gold" />
        </Head>
        <body className="d-flex flex-column h-100">
            <Header />
            <Container as="main">
                <Main />
            </Container>
            <Footer />
            <NextScript />
        </body>
    </Html>;
}
