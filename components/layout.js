import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'John Siddoway';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="description" content="John Siddoway Blog" />
        <meta name="og:title" content="John Siddoway Blog: Maps and Gold" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Link href="/">
            <a><Image priority src="/images/profile.png" height={108} width={108} alt={name}/></a>
        </Link>
        <h2>
            <Link href="/">
                <a>{name}</a>
            </Link>
        </h2>
      </header>
      <main>
        {children}
      </main>
      <footer>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </footer>
    </div>
  );
}