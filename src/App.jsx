//import { useState } from 'react'

import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Processing from './components/processing/Processing';
// import './app.scss';

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<div className='top-block'>
				<Header></Header>
				<Main></Main>
			</div>
			<Processing></Processing>
			<Footer></Footer>
		</>
	)
}

export default App;
