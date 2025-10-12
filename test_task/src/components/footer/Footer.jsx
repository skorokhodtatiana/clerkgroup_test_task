
// import walet from '../../assets/images/footer/wallet.svg';
// import yandex from '../../assets/images/footer/yandex.svg';
// import web from '../../assets/images/footer/web.svg';
// import mail from '../../assets/images/footer/mail.svg';
// import vk from '../../assets/images/footer/vk.svg';
import * as Icons from '../icons/footer/Icons';
import './footer.scss';

const Footer = () => {
	return (
		<div>
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
				<div class="footer__verticle-line"></div>
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