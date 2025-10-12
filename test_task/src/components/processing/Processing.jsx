import Button from '../button/button';
import Step from '../step/Step';
import * as Icons from '../icons/step/Icons-step';
import './processing.scss';

const Processing = () => {
	return (
		<>
			<div className="processing">
				<h2 className="processing__title">ОФОРМЛЕНИЕ
					<span className="processing__title_blue"> ЗАКАЗА</span>
				</h2>
				<div className="processing__title-second">Перед заполнением формы ознакомьтесь с нашей схемой работы!</div>
				<div className="processing__steps">
					<Step src={ Icons.search } alt={"Icons.search"}></Step>
					<Step src={ Icons.percent } alt={"Icons.percent"}></Step>
					<Step src={ Icons.file } alt={"Icons.file"}></Step>
					<Step src={ Icons.message } alt={"Icons.message"}></Step>
					<Step src={ Icons.money } alt={"Icons.money"}></Step>
				</div>
				
				<Button className={'processing__button'} children={'ОТПРАВИТЬ'}></Button>
			</div>
		</>
	)
}

export default Processing;