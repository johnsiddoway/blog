// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
	.replace(/\s*\<script.*\/assets\/index.*\.js\"\>\<\/script\>/, '')
	.replace(/\s*\<link.*href\=\"\/assets\/vendor.*\.js\"\>/, '');
const { render } = await import('./dist/server/entry-server.js');

async function prerenderPages() {
	// determine routes to pre-render from src/pages
	const routesToPrerender = ['/', '/about', '/archive', '/404'];

	for (const url of routesToPrerender) {
		const context = {};
		const appHtml = await render(url, context);
		const html = template.replace(`<!--app-html-->`, appHtml);
		const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
		fs.writeFileSync(toAbsolute(filePath), html);
		console.log('pre-rendered: ', filePath);
	}
}

async function prerenderPosts() {
	console.info(`Attempting to prerender src/posts`);
	const postsToPrerender = fs.readdirSync(toAbsolute('src/posts'));
	for (const filePath of postsToPrerender) {
		let localTemplate = template;
		// Attempting to add a custom script tag to specific page headers
		const content = fs.readFileSync(toAbsolute('src/posts/' + filePath), 'utf-8');
		const postDetail = getPostDetail(filePath, content);
		if (postDetail.metadata.customJavascript) {
			console.log(`Need to add a script tag for ${postDetail.metadata.customJavascript}`);
			const tag = `<script type="module" crossorigin src="${postDetail.metadata.customJavascript}"></script>`;
			localTemplate = localTemplate.replace('</head>', `${tag}\n</head>`);
		}
		if (postDetail.metadata.customStylesheet) {
			console.log(`Need to add a stylesheet tag for ${postDetail.metadata.customStylesheet}`);
			const tag = `<link rel="stylesheet" href="${postDetail.metadata.customStylesheet}">`;
			localTemplate = localTemplate.replace('</head>', `${tag}\n</head>`);
		}

		const datePart = filePath.slice(0, 11).replaceAll('-', '/');
		const namePart = filePath.slice(11, -3);
		const url = `/posts/${datePart}${namePart}`;
		const appHtml = await render(url, {});
		const html = localTemplate.replace(`<!--app-html-->`, appHtml);
		const outPath = toAbsolute(`dist/static${url}.html`);
		const outDir = path.dirname(outPath);
		fs.mkdirSync(outDir, { recursive: true });
		fs.writeFileSync(outPath, html);
		console.log(`prerendered: ${outPath}`);
	}
}

function getPostDetail(path, content) {
	const name = path.slice(3, -3);
	const url = getUrl(name);
	const matterResult = matter(content);
	return {
		content: matterResult.content,
		path,
		name,
		date: matterResult.data.date,
		title: matterResult.data.title,
		url,
		metadata: matterResult.data
	};
}

function getUrl(name) {
	const datePart = name.slice(0, 17).replaceAll('-', '/');
	const namePart = name.slice(17);
	return `/${datePart}${namePart}`;
}

(async () => {
	prerenderPosts();
	prerenderPages();
})();