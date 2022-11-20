import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return <Html lang="en">
        <Head>
            <link rel="icon" href="/favicon.png" type="image/png" />
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Exo+2|Fira+Code|Open+Sans|Source+Sans+Pro" />
            {/* TODO: Move these from generic imports to only being included on pages that need them */}
            <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
            <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
            <meta name="description" content="John Siddoway Blog" />
            <meta name="og:title" content="John Siddoway Blog: Maps and Gold" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>;
}
