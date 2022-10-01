import Link from 'next/link';
import { Date, Layout } from '../components';
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