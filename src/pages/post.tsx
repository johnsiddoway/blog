import { useParams } from "react-router";
import { getPostContent } from "../lib/posts";
import matter from 'gray-matter';
import markdownIt from 'markdown-it';
import highlight from 'markdown-it-highlightjs';

const markdown = markdownIt({
	html: true,
	breaks: true,
	linkify: true,
});

export default function Post() {
	const params = useParams();
	const rawContent = getPostContent(params.id!);

	const matterResult = matter(rawContent);
	// Use markdown-it to convert markdown into HTML string
	const html = markdown.use(highlight)
		.render(matterResult.content);

	return <article className="post">
		<div className="post-header">
			<h1>{matterResult.data.title}</h1>
			<div>{matterResult.data.date}</div>
		</div>
		<div dangerouslySetInnerHTML={{ __html: html }} />
	</article>;
}
