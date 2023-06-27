import { useLocation } from "react-router";
import { getPost } from "../lib/posts";
import markdownIt from 'markdown-it';
import highlight from 'markdown-it-highlightjs';

const markdown = markdownIt({
	html: true,
	breaks: true,
	linkify: true,
});

export default function Post() {
	const { pathname } = useLocation();

	const post = getPost(pathname);
	// Use markdown-it to convert markdown into HTML string
	const html = markdown
		.use(highlight)
		.render(post.content);

	return <article className="post">
		<div className="post-header">
			<h1>{post.title}</h1>
			<div>{post.date}</div>
		</div>
		<div dangerouslySetInnerHTML={{ __html: html }} />
	</article>;
}
