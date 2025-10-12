

const Button = ({
	className,
	disabled,
	children,
	type = 'button',
	...props
}) => {

	return (
		<button className={ className }
			disabled={ disabled }
			type={ type }
			{...props}
		>
			{ children }
		</button>
	);
};

export default Button;