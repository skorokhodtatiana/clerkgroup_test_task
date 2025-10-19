import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Processing from '../../components/processing/Processing';
import './HomePage.scss';

const MainPage = () => {
	return (
		<>
			<div className='top-block'>
				<Header></Header>
				<Main></Main>
			</div>
			<Processing></Processing>
		</>
	)
}

export default MainPage;
