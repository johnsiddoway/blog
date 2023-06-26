import { Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about';
import Archive from './pages/archive';
import Post from './pages/post';
import "./styles/maps-and-gold.scss"

export default function App() {
	return <Routes>
		<Route Component={Layout}>
			<Route index element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/archive' element={<Archive />} />
			<Route path='/posts/:year/:month/:day/:id' element={<Post />} />
		</Route>
	</Routes>;
}