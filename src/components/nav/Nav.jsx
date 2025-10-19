import './Nav.scss';
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<nav className="nav">
				<NavLink className="nav__link nav__link_blue" to="/">БИЗНЕС</NavLink>
				<NavLink className="nav__link" to="/aboutUs">О НАС</NavLink>
				<NavLink className="nav__link" to="/error">ЦЕНЫ</NavLink>
				<a className="nav__link" href="/#">ОФОРМИТЬ ЗАКАЗ</a>
			</nav>
		</>
	)
}

export default Nav;
