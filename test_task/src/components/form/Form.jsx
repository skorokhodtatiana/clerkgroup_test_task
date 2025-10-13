import { useState } from 'react';
import Input from '../input/Input';
import Button from '../button/button';
import upload from '../../assets/images/processing/upload.svg';
import './Form.scss';

const Form = () => {
	//const [systemValue, setSystemValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [nameValue, setNameValue] = useState('');
	const [fileValue, setFileValue] = useState('');

	const arrItemForSelect = [
		'Sed ut perspiciatis',
		'Nemo enim ipsam',
		'Et harum quidem',
		'Temporibus autem',
		'Itaque earum rerum',
	];

	return (
		<>
			<form className="form">
				<select name="typeSystem" className="form__select">
					<option key="" value="Выберите тип системы" selected disabled>Выберите тип системы</option>
					{arrItemForSelect.map((item, index) => (
						<option key={ index } value={item}>{ item }</option>
					))}
					<option></option>
				</select>
				<Input name="type-system" placeholder="Ваш e-mail" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}></Input>
				<Input name="type-system" placeholder="Ваше имя" value={nameValue} onChange={(e) => setNameValue(e.target.value)}></Input>
				<div className="form__progress-block">
					<div className="form__progress-text">
						<span>Sed ut perspiciatis, unde omnis iste natus</span>
						<span>75%</span>
					</div>
					<progress className="form__progress" id="progressBar" value="0" max="100"></progress>
				</div>
				<label className="form__label-upload-file" htmlFor="file-upload">
					<img className="form__label-img" src={upload} alt="upload"></img>
					<span className="form__label-text">ПРИКРЕПИТЬ ФАЙЛ</span>
				</label>
				<Input inputClass="form__upload-file" id="file-upload" name="file-upload" type="file" accept=".pdf" placeholder="Прикрепить файл" value={fileValue} onChange={(e) => setFileValue(e.target.value)}></Input>
				<Button type="submit" className={'processing__button'} children={'ОТПРАВИТЬ'}></Button>
			</form>
		</>
	)
}

export default Form;