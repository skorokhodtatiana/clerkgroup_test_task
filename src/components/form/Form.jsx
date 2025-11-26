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
	const [nameFile, setNameFile] = useState('Sed ut perspiciatis, unde omnis iste natus');
	const [fileValue, setFileValue] = useState(null);
	const [progress, setProgress] = useState(0);

	const uploadRef = useRef(null);
	// const statusRef = useRef(null);
	// const progressRef = useRef(null);

	const uploadFile = (event) => {
		if (event.target.files && event.target.files[0]) {
			setFileValue(event.target.files[0]);
			setNameFile(uploadRef.current.files[0].name);
		}

		const formData = new FormData();
		formData.append("file", fileValue);
		const xhr = new XMLHttpRequest();
		xhr.upload.addEventListener("progress", ProgressHandler, false);
		xhr.open("POST", "some path");
		xhr.send(formData);
	};

	const ProgressHandler = (e) => {
		//const percent = (e.loaded / e.total) * 100;
		//statusRef.current.textContent = Math.round(percent) + "% uploaded...";
		//setPercent(Math.round(percent) + '% uploaded...');
		//progressRef.current.value = Math.round(percent);

		const timer = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress >= 100) {
					clearInterval(timer);
					//setIsLoading(false);
					return 100;
				}
				return prevProgress + 10;
			});

			setPercent((prevProgress) => {
				if (prevProgress >= 100) {
					clearInterval(timer);
					return 100;
				}
				return prevProgress + 10;
			});
		}, 200);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Отправлено');
		setFileValue('');
		setEmailValue('');
		setNameValue('');
		setNameFile('Sed ut perspiciatis, unde omnis iste natus');
		setPercent(0);
		setProgress(0);
		// const formData = new FormData();
		// formData.append("file", fileValue);
		// const xhr = new XMLHttpRequest();
		// xhr.upload.addEventListener("progress", ProgressHandler, false);
		// xhr.open("POST", "some path");
		// xhr.send(formData);
	}

	const arrItemForSelect = [
		'Sed ut perspiciatis',
		'Nemo enim ipsam',
		'Et harum quidem',
		'Temporibus autem',
		'Itaque earum rerum',
	];

	return (
		<>
			<form className="form" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
				<select name="typeSystem" className="form__select" onChange={(e) => setSystemValue(e.target.value)} value={systemValue}>
					<option key="" value="Выберите тип системы" disabled>Выберите тип системы</option>
					{arrItemForSelect.map((item, index) => (
						<option key={ index } name={item}>{ item }</option>
					))}
					<option></option>
				</select>
				<Input inputClass={"form__input"} name="type-system" placeholder="Ваш e-mail" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}></Input>
				<Input inputClass="form__input" name="type-system" placeholder="Ваше имя" value={nameValue} onChange={(e) => setNameValue(e.target.value)}></Input>
				<div className="form__progress-block">
					<div className="form__progress-text">
						<span>{ nameFile }</span>
						{/* <span className="form__progress-percent" ref={statusRef}>{percentValue + "%"}</span> */}
						<span className="form__progress-percent">{percentValue + ' %'}</span>
					</div>
					{/* <progress className="form__progress " ref={progressRef} value={progress} max="100"></progress> */}
					<progress className="form__progress " value={progress} max="100"></progress>
				</div>
				<label className="form__label-upload-file" htmlFor="file-upload">
					<img className="form__label-img" src={upload} alt="upload"></img>
					<span className="form__label-text">ПРИКРЕПИТЬ ФАЙЛ</span>
				</label>
				<span>
					<Input ref={uploadRef} inputClass="form__upload-file" id="file-upload" name="file-upload" type="file" placeholder="Прикрепить файл" onChange={uploadFile}></Input>
				</span>
				<Button type="submit" className={'form__button'} children={'ОТПРАВИТЬ'} disabled={!fileValue || !emailValue || !nameValue}></Button>
			</form>
		</>
	)
}

export default Form;
