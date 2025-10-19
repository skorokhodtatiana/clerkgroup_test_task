import './App.scss'
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import PageError from './pages/pageError/PageError';
import Footer from './components/footer/Footer';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {

	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<HomePage/>}></Route>
				<Route path="/error" element={<PageError/>}></Route>
				<Route path="/aboutUs" element={<AboutUs/>}></Route>
			</Routes>
			<Footer></Footer>
		</HashRouter>
	)
}

export default App;
