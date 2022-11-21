import Link from 'next/link';
import { BlogListItem } from '../components/bloglistitem';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const environmentVariable = process.env.TEST_VARIABLE;
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
            environmentVariable,
        },
    };
}

export default function Home({ allPostsData, environmentVariable }) {
    const listItems = allPostsData.slice(0, 5).map((post) =>
        <BlogListItem key={post.id} id={post.id} title={post.title} date={post.date}/>
    );
    return <article>
        <div>Environment Variable? {environmentVariable}</div>
        <ul className="list-unstyled">
            {listItems}
        </ul>
        <h3 className="text-center">
            <Link href='/archive'>Blog Archive</Link>
        </h3>
    </article>;
}
