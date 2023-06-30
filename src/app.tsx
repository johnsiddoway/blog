import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from './components/layout';
import About from './pages/about';
import Archive from './pages/archive';
import ErrorBoundary from './pages/error-boundary';
import Home from './pages/home';
import NoPageFound from './pages/no-page-found';
import NoPostFound from './pages/no-post-found';
import Post from './pages/post';
import "./styles/maps-and-gold.scss"

export const routes: RouteObject[] = [
	{
		path: "/",
		Component: Layout,
		ErrorBoundary: ErrorBoundary,
		children: [
			{
				path: "",
				Component: Home,
			},
			{
				path: "about",
				Component: About,
			},
			{
				path: "archive",
				Component: Archive,
			},
			{
				path: "posts/:year/:month/:day/:id",
				Component: Post,
				ErrorBoundary: NoPostFound
			},
			{
				path: "/404",
				Component: NoPageFound
			},
			{
				path: "*",
				Component: NoPageFound
			}
		],
	},
];

export default function App() {
	return useRoutes(routes);
}