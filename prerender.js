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

// determine routes to pre-render from src/pages
const routesToPrerender = ['/', '/about', '/archive'];
async function prerenderPages() {
    for (const url of routesToPrerender) {
        const context = {};
        const appHtml = await render(url, context);

        const html = template.replace(`<!--app-html-->`, appHtml);

        const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
        fs.writeFileSync(toAbsolute(filePath), html);
        console.log('pre-rendered:', filePath);
    }
}

async function prerenderPosts() {
    console.info(`Attempting to prerender /src/posts`);
}

(async () => {
    prerenderPages();
    prerenderPosts();
})();