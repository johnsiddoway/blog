// import { BlogListItem } from '../components/bloglistitem';
// import { getSortedPostsData } from '../lib/posts';

// export async function getStaticProps() {
//     const allPostsData = getSortedPostsData();
//     return {
//         props: {
//             allPostsData,
//         },
//     };
// }

export default function Archive() {
	// const listItems = allPostsData.map((post) =>
	//     <div key={post.id} id={post.id} title={post.title} date={post.date}/>
	// );
	return <article>
		<ul className="list-unstyled">
			<li>List items go here</li>
		</ul>
	</article>;
}
