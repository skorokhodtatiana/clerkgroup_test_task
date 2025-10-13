import * as Icons from '../icons/step/Icons-step';
import './Step.scss';

const Step = ({src, alt, text, lastChild=""}) => {

	return (
		<div className="step-icon">
			<div></div>
			<div className="step-icon__image">
				<img src={Icons.circle} alt="circle"></img>
				<img className="step-icon__icon" src={src} alt={alt}></img>
			</div>
			<div className={"step-icon__dots " + lastChild}>
				<div className="step-icon__dot"></div>
				<div className="step-icon__dot"></div>
				<div className="step-icon__dot"></div>
				<div className="step-icon__dot"></div>
				<div className="step-icon__dot"></div>
			</div>
			<div className="step-icon__text">{ text }</div> 
		</div>
	)
}

export default Step;
