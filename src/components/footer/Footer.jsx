import * as Icons from '../icons/footer/Icons';
import './Footer.scss';

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer__author">© 2018 «LOREMIPSUM.NET» Все права защищены.</div>
				<div className="footer__options-payment">
					<div className="footer__item">
						<img src={Icons.wallet} alt="walet"></img>
						<span className="footer__item-text">QIWI wallet</span>
					</div>
					<div className="footer__item">
						<img src={Icons.yandex} alt="yandex"></img>
						<span className="footer__item-text">Yandex Money</span>
					</div>
					<div className="footer__item">
						<img src={Icons.web} alt="web"></img>
						<span className="footer__item-text">Web Money</span>
					</div>
				</div>
				<div className="footer__options-payment">
					<a className="footer__link" href="mailto:info@hexlet.io">
						<img src={Icons.mail} alt="mail"></img>
						<span className="footer__item-text">info@ipsum228.com</span>
					</a>
					<a className="footer__link" href="mailto:info@hexlet.io">
						<img src={Icons.vk} alt="vk"></img>
						<span className="footer__item-text">Мы вконтакте</span>
					</a>
				</div>
			</div>
		</>
	)
}

export default Footer;
