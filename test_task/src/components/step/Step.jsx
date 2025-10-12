// import Button from '../button/button';
import * as Icons from '../icons/step/Icons-step';
import './Step.scss';

const Step = ({src, alt}) => {

	return (
		<>
			<div className="step-icon">
				<img className="step-icon__circle" src={Icons.circle} alt="circle"></img>
				<img className="step-icon__icon" src={src} alt={alt}></img>
			</div>
		</>
	)
}

export default Step;
