import { Link } from "react-router-dom";
import { PostDetail } from "../lib/posts";

export interface PostListItemProps {
	key: string;
	post: PostDetail;
}
export default function PostListItem({ post }: PostListItemProps) {
	return <div className="post-list-item">
		<Link to={post.url}><h2>{post.title}</h2></Link>
		<div>{post.date}</div>
	</div>;
}