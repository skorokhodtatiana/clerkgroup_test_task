import { useState, useRef } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import upload from '@/assets/images/processing/upload.svg';
import './Form.scss';

const Form = () => {
	const [systemValue, setSystemValue] = useState('Выберите тип системы');
	const [emailValue, setEmailValue] = useState('');
	const [nameValue, setNameValue] = useState('');
	const [percentValue, setPercent] = useState(0);
	const [fileValue, setFileValue] = useState('');

	const uploadRef = useRef();
	const statusRef = useRef();
	const progressRef = useRef();

	const UploadFile = () => {
		setFileValue(fileValue);
		var formData = new FormData();
		formData.append("file", fileValue);
		var xhr = new XMLHttpRequest();
		xhr.upload.addEventListener("progress", ProgressHandler, false);
		xhr.open("POST", "some path");
		xhr.send(formData);
	};

	const ProgressHandler = (e) => {
		var percent = (e.loaded / e.total) * 100;
		statusRef.current.innerHTML = Math.round(percent) + "% uploaded...";
		setPercent(percent)
		progressRef.current.value = Math.round(percent);
	};

	const arrItemForSelect = [
		'Sed ut perspiciatis',
		'Nemo enim ipsam',
		'Et harum quidem',
		'Temporibus autem',
		'Itaque earum rerum',
	];

	return (
		<>
			<form className="form" method="post" encType="multipart/form-data">
				<select name="typeSystem" className="form__select" onChange={(e) => setSystemValue(e.target.value)} value={systemValue}>
					<option key="" value="Выберите тип системы" disabled>Выберите тип системы</option>
					{arrItemForSelect.map((item, index) => (
						<option key={ index } name={item}>{ item }</option>
					))}
					<option></option>
				</select>
				<Input name="type-system" placeholder="Ваш e-mail" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}></Input>
				<Input name="type-system" placeholder="Ваше имя" value={nameValue} onChange={(e) => setNameValue(e.target.value)}></Input>
				<div className="form__progress-block">
					<div className="form__progress-text">
						<span>Sed ut perspiciatis, unde omnis iste natus</span>
						<span className="form__progress-percent" ref={statusRef}>{percentValue + "%"}</span>
					</div>
					<progress className="form__progress " ref={progressRef} id="progressBar" value="0" max="100"></progress>
				</div>
				<label className="form__label-upload-file" htmlFor="file-upload">
					<img className="form__label-img" src={upload} alt="upload"></img>
					<span className="form__label-text">ПРИКРЕПИТЬ ФАЙЛ</span>
				</label>
				<Input inputClass="form__upload-file" ref={uploadRef} id="file-upload" name="file-upload" type="file" placeholder="Прикрепить файл" value={fileValue} onChange={UploadFile}></Input>
				<Button type="submit" className={'processing__button'} children={'ОТПРАВИТЬ'}></Button>
			</form>
		</>
	)
}

export default Form;
