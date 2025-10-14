
import * as Icons from '../icons/footer/Icons';
import './Footer.scss';

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer">
				<div className="footer__author">© 2018 «LOREMIPSUM.NET» Все права защищены.</div>
				<div className="footer__verticle-line"></div>
				<div className="footer__item">
					<img className="footer__item-img" src={Icons.wallet} alt="walet"></img>
					QIWI wallet
				</div>
				<div className="footer__item">
					<img className="footer__item-img" src={Icons.yandex} alt="yandex"></img>
					Yandex Money
				</div>
				<div className="footer__item">
					<img className="footer__item-img" src={Icons.web} alt="web"></img>
					Web Money
				</div>
				<div className="footer__verticle-line"></div>
				<a className="footer__link" href="mailto:info@hexlet.io">
					<img className="footer__item-img" src={Icons.mail} alt="mail"></img>
					info@ipsum228.com
				</a>
				<a className="footer__link" href="mailto:info@hexlet.io">
					<img className="footer__item-img" src={Icons.vk} alt="vk"></img>
					Мы вконтакте
				</a>
			</div>
		</div>
	)
}

export default Footer;