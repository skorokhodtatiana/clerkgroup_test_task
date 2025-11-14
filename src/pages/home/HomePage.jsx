import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Processing from '../../components/processing/Processing';
import { MyProvider } from '../../context/AppContext/AppContext';
import './HomePage.scss';
import { useState } from 'react';

const MainPage = () => {
	const [value, setValue] = useState(null);

	return (
		<>
		<MyProvider value={{ value, setValue }}>
			<div className='top-block'>
				<Header></Header>
				<Main></Main>
			</div>
				<Processing></Processing>
			</MyProvider>
		</>
	)
}

export default MainPage;
