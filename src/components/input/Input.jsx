import './Input.scss';

const Input = ({
			name,
			inputClass,
			placeholder,
			inputRef,
			value,
			type='text',
			id='',
			...props
		}) => {

		return (
			<>
				<input
					className={'input ' + inputClass}
					name={name}
					placeholder={placeholder}
					ref={inputRef}
					value={value}
					type={type}
					id={id}
					{...props}/>
			</>
		);
	}

export default Input;
