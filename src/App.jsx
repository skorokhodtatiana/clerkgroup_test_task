import './App.scss'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Processing from './components/processing/Processing';

function App() {

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
