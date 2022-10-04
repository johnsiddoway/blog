import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Date } from '../components';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return <>
        <Head>
            <title>John Siddoway Blog: Maps and Gold</title>
        </Head>
        <ul className="list-unstyled">
            {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                    <h3 className="text-primary"><Link href={`/posts/${id}`}><a>{title}</a></Link></h3>
                    <div className="border-dark border-top border-bottom mb-3">
                        <div className="d-inline">
                            <FontAwesomeIcon icon={faCalendarAlt} fixedWidth />
                            <Date dateString={date} />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </>;
}
