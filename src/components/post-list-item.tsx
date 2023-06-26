import { Link, To } from "react-router-dom";
import { PostDetail } from "../lib/posts";

export interface PostListItemProps {
	key: string;
	post: PostDetail;
}
export default function PostListItem({ post }: PostListItemProps) {
	return <div className="post-list-item">
		<Link to={post.url}><h1>{post.title}</h1></Link>
		<div>{post.date}</div>
	</div>;
}