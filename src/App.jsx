import './App.scss'
// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import PageError from './pages/pageError/PageError';
import Footer from './components/footer/Footer';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
	// const router =  createBrowserRouter([
	// 	{
	// 		path: "/",
	// 		Component: HomePage,
	// 	},
	// 	{
	// 		path: "/error",
	// 		Component: PageError,
	// 	},
	// 	{
	// 		path: "/aboutUs",
	// 		Component: AboutUs,
	// 	}
	// ]);

	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<HomePage/>}></Route>
				<Route path="/error" element={<PageError/>}></Route>
				<Route path="/aboutUs" element={<AboutUs/>}></Route>
			</Routes>
			<Footer></Footer>
		</HashRouter>
		// <RouterProvider router={router} />
	)
}

export default App;
