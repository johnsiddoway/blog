import Link from 'next/link';
import Date from '../components/date';
import Layout from '../components/layout';
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
    return (
      <Layout>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
            ))}
          </ul>
      </Layout>
    );
}