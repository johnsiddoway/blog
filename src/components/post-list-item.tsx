import { Link } from "react-router-dom";
import { PostDetail } from "../lib/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

export interface PostListItemProps {
	key: string;
	post: PostDetail;
}
export default function PostListItem({ post }: PostListItemProps) {
	return <Link to={post.url} className="post-list-item">
		<h2>{post.title}</h2>
		<div className="date-with-icon">
			{post.date}
			<FontAwesomeIcon icon={faCalendarDays} />
		</div>
	</Link>;
}