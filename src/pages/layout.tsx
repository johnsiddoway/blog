import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export default function Layout() {
	return <>
		<header>
			<nav>
				<div className="flex-with-gap">
					<Link to="/" className="js-brand">Maps and Gold</Link>
					<Link to="/archive">Archive</Link>
					<Link to="/about">About</Link>
				</div>
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