import './Input.scss';

const Input = ({
			name,
			inputClass,
			containerClass,
			placeholder,
			inputRef,
			value,
			type='text',
			id='',
			...props
		}) => {

		return (
			<span className={containerClass}>
				<input
					className={'input ' + inputClass}
					name={name}
					placeholder={placeholder}
					ref={inputRef}
					value={value}
					type={type}
					id={id}
					{...props} />
			</span>
		);
	}

export default Input;
