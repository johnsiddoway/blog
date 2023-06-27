import { PostDetail, getRecentPosts } from "../lib/posts";
import PostListItem from "../components/post-list-item";
import { Link } from "react-router-dom";

export default function Home() {
	const items = getRecentPosts(5).map((post: PostDetail) => <PostListItem key={post.url} post={post} />);

	return <div className="post-list">
		{items}
		<div className="post-list-item">
			<h2><Link to="/archive">Archived Posts</Link></h2>
		</div>
	</div>;
}