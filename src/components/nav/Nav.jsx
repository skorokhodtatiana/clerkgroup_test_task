import { useState } from 'react';
import './Nav.scss';
import { NavLink } from "react-router-dom";

const Nav = () => {
	const [isMobile, setIsMobile] = useState(false);
	const handleClick = () => {
		setIsMobile(!isMobile)
	}

	return (
		<div className="nav" >
			<div className={isMobile ? "burger-menu burger-menu_open" : "burger-menu"} onClick={handleClick}>
				<span className="burger-menu__line"></span>
				<span className="burger-menu__line"></span>
				<span className="burger-menu__line"></span>
			</div>
			<nav className={isMobile ? "nav__items nav__items_flex" : "nav__items"}>
				<NavLink className="nav__link" to="/">БИЗНЕС</NavLink>
				<NavLink className="nav__link" to="/aboutUs">О НАС</NavLink>
				<NavLink className="nav__link" to="/error">ЦЕНЫ</NavLink>
				<a className="nav__link" href="/#">ОФОРМИТЬ ЗАКАЗ</a>
			</nav>
		</div>
	)
}

export default Nav;
