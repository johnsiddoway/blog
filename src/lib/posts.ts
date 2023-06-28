import matter from "gray-matter";

// https://vitejs.dev/guide/features.html#glob-import
const _postGlobs = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });
const _allPosts: PostDetail[] = Object.keys(_postGlobs)
	.map(post => getPostDetail(post, _postGlobs[post]))
	.sort(sortPosts);

export interface PostDetail {
	content: string; // raw markdown string
	name: string; // trimmed down filename
	path: string; // relative file path
	url: string; // url to render this post under
	date: string;
	title: string;
	metadata: { [key: string]: any };
}
export function getPost(url: string): PostDetail {
	return _allPosts.filter(post => post.url === url)[0];
}
export function getRecentPosts(count?: number): PostDetail[] {
	return _allPosts.slice(0, count);
}
// path: ../posts/2022-11-19-goodbye-jekyll-hello-nextjs.md
function getPostDetail(path: string, content: string): PostDetail {
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
function getUrl(name: string): string {
	const datePart = name.slice(0, 17).replaceAll('-', '/');
	const namePart = name.slice(17);
	return `/${datePart}${namePart}`;
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