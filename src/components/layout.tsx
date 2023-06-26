import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export default function Layout() {
	return <>
		<header>
			<nav>
				<Link to="/" className="js-brand">Maps and Gold</Link>
				<Link to="/archive">Archive</Link>
				<Link to="/about">About</Link>
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
		<footer>
			© {new Date().getFullYear()} John Siddoway
		</footer>
	</>;
}