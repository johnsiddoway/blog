// https://vitejs.dev/guide/features.html#glob-import
const _postGlobs = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });
const _allPosts = Object.keys(_postGlobs)
	.map(post => getPostDetail(post, _postGlobs[post]))
	.sort(sortPosts);

export interface PostDetail {
	content: string; // raw markdown string
	name: string; // trimmed down filename
	path: string; // relative file path
	url: string; // url to render this post under
	date: string;
	title: string;
}
export function getPostContent(id: string): string {
	const posts = _allPosts.filter(post => post.title === id)[0];
	return posts.content;
}
export function getRecentPosts(count?: number): PostDetail[] {
	return _allPosts.slice(0, count);
}
// path: ../posts/2022-11-19-goodbye-jekyll-hello-nextjs.md
function getPostDetail(path: string, content: string): PostDetail {
	const name = path.slice(3, -3);
	const date = name.match(/(\d{4}(-\d{2})+)/)![1];
	const title = name.slice(17);
	const url = getUrl(name);
	return {
		content,
		path,
		name,
		date,
		title,
		url,
	};
}
function getUrl(name: string): string {
	const datePart = name.slice(0, 17).replaceAll('-', '/');
	const namePart = name.slice(17);
	const url = `/${datePart}${namePart}`;
	console.info(`URL for ${name}: ${url}`);
	return url;
}
function sortPosts(a: PostDetail, b: PostDetail) {
	if (a.date < b.date) {
		return 1;
	} else if (a.date > b.date) {
		return -1;
	} else {
		return 0;
	}
}