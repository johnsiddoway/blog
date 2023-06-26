import { PostDetail, getRecentPosts } from "../lib/posts";
import PostListItem from "../components/post-list-item";

export default function Archive() {
	const items = getRecentPosts().map((post: PostDetail) => <PostListItem key={post.url} post={post} />);

	return <div className="post-list">
		{items}
	</div>;
}