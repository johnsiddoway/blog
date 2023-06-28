import { useLocation } from "react-router";
import { getPost } from "../lib/posts";
import markdownIt from 'markdown-it';
import highlight from 'markdown-it-highlightjs';
import { useEffect } from "react";

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

	if (post.metadata.includeJQuery) {
		let script = document.querySelector(`script[src='https://code.jquery.com/jquery-3.7.0.min.js']`);
		if (!script) {
			var element = document.createElement('script');
			element.type = "text/javascript";
			element.src = "https://code.jquery.com/jquery-3.7.0.min.js";
			element.integrity = "sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=";
			element.crossOrigin = "anonymous";
			document.head.appendChild(element);
		}
	}
	if (post.metadata.customJavascript) {
		let script = document.querySelector(`script[src='${post.metadata.customJavascript}']`);
		if (!script) {
			var element = document.createElement('script');
			element.type = 'text/javascript';
			element.src = post.metadata.customJavascript;
			document.head.appendChild(element);
		}
	}
	if (post.metadata.customStylesheet) {
		let stylesheet = document.querySelector(`link[href='${post.metadata.customStylesheet}']`);
		if (!stylesheet) {
			var element = document.createElement('link');
			element.rel = "stylesheet";
			element.type = "text/css";
			element.href = post.metadata.customStylesheet;
			document.head.appendChild(element);
		}
	}

	return <article className="post">
		<div className="post-header">
			<h1>{post.title}</h1>
			<div>{post.date}</div>
		</div>
		<div dangerouslySetInnerHTML={{ __html: html }} />
	</article>;
}
