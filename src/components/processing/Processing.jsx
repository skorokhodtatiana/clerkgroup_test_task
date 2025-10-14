import Step from '../step/Step';
import * as Icons from '../icons/step/Icons-step';
import './processing.scss';
import Form from '../form/Form';

const Processing = () => {
	
	return (
		<>
			<div className="processing">
				<h2 className="processing__title">ОФОРМЛЕНИЕ
					<span className="processing__title_blue"> ЗАКАЗА</span>
				</h2>
				<div className="processing__title-second">Перед заполнением формы ознакомьтесь с нашей схемой работы!</div>
				<div className="processing__steps">
					<Step src={ Icons.search } alt={"Icons.search"} text="Lorem ipsum dolorsit amet"></Step>
					<Step src={ Icons.percent } alt={"Icons.percent"} text="Сonsecteturadipiscing elit"></Step>
					<Step src={ Icons.file } alt={"Icons.file"} text="Sed do eiusmod tempor"></Step>
					<Step src={ Icons.message } alt={"Icons.message"} text="Esse cillum dolore eu fugiat"></Step>
					<Step src={ Icons.money } alt={"Icons.money"} lastChild="last-item" text="Excepteur sint occaecat cupidatat non proident"></Step>
				</div>
				<div>
					<Form></Form>
				</div>
			</div>
		</>
	)
}

export default Processing;
