import Button from '../button/Button';
import './Main.scss';
import { useAppContext } from '../../context/AppContext/AppContext';

const Main = () => {
	const { value, setValue } = useAppContext();
	const changeContext = () => {
		value === null ? setValue('Первый результат') : setValue('Второй результат');
	}

	return (
		<>
			<main className='main'>
				<div className="main__container">
					<h1 className="main__title">
						<span className="main__title_blue">LOREM IPSUM </span>
						DOLOR SIT <br/>
						AMETCONSECTETUR
						<span className="main__title_blue"> ADIPISCING</span>
					</h1>
					<h3 className="main__title-second">At vero eos et accusamus et iusto odio dignissimos ducimus!</h3>
					<ul className="main__list">
						<li className="main__list-item">-&nbsp;&nbsp;Totam rem aperiam eaque ipsa</li>
						<li className="main__list-item">-&nbsp;&nbsp;Sit voluptatem accusantium doloremque laudantium</li>
						<li className="main__list-item">-&nbsp;&nbsp;Sed ut perspiciatis, unde omnis iste natus error</li>
					</ul>
					<div className="main__flex">
						<Button className="main__button main__button_blue" children='ЗАКАЗАТЬ'></Button>
						<Button className="main__button" children='ПОДРОБНЕЕ' handleClick={changeContext}></Button>
					</div>
				</div>
			</main>
		</>
	)
}

export default Main;
