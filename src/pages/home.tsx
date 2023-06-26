import { Link } from "react-router-dom";
import { PostDetail, getRecentPosts } from "../lib/posts";

export default function Home() {
	const items = getRecentPosts(5).map((route: PostDetail) => {
		return <div key={route.name} className="blog-post-link">
			<div>URL</div><div><Link to={route.url}>{route.url}</Link></div>
			<div>Name</div><div>{route.name}</div>
			<div>Path</div><div>{route.path}</div>
			<div>Title</div><div>{route.title}</div>
			<div>Date</div><div>{route.date}</div>
		</div>
	});
	return <>
		{items}
	</>;
}