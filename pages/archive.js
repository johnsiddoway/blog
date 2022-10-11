import { BlogListItem } from '../components';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Archive({ allPostsData }) {
    const listItems = allPostsData.map((post) =>
        <BlogListItem key={post.id} id={post.id} title={post.title} date={post.date}/>
    );
    return <article>
        <ul className="list-unstyled">
            {listItems}
        </ul>
    </article>;
}
