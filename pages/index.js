import Link from 'next/link';
import { BlogListItem } from '../components/bloglistitem';
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
    const listItems = allPostsData.slice(0, 5).map((post) =>
        <BlogListItem key={post.id} id={post.id} title={post.title} date={post.date}/>
    );
    return <article>
        <ul className="list-unstyled">
            {listItems}
        </ul>
        <h3 className="text-center">
            <Link href='/archive'>Blog Archive</Link>
        </h3>
    </article>;
}
