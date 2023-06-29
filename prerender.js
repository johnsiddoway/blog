// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
    .replace(/\s*\<script.*\/assets\/index.*\.js\"\>\<\/script\>/, '')
    .replace(/\s*\<link.*href\=\"\/assets\/vendor.*\.js\"\>/, '');
const { render } = await import('./dist/server/entry-server.js');

async function prerenderPages() {
    // determine routes to pre-render from src/pages
    const routesToPrerender = ['/', '/about', '/archive'];

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
        const datePart = filePath.slice(0, 11).replaceAll('-', '/');
        const namePart = filePath.slice(11, -3);
        const url = `/posts/${datePart}${namePart}`;
        const appHtml = await render(url, {});
        const html = template.replace(`<!--app-html-->`, appHtml);
        const outPath = toAbsolute(`dist/static${url}.html`);
        const outDir = path.dirname(outPath);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(outPath, html);
        console.log(`prerendered: ${outPath}`);
    }
}

(async () => {
    prerenderPages();
    prerenderPosts();
})();