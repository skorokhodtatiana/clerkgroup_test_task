import './Button.scss';

const Button = ({
	className,
	disabled,
	children,
	handleClick,
	type = 'button',
	...props
}) => {

	return (
		<button className={ 'button ' + className }
			disabled={ disabled }
			type={ type }
			onClick={handleClick}
			{...props}
		>
			{ children }
		</button>
	);
};

export default Button;
