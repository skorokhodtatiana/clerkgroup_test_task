import Nav from '../nav/Nav';

import './header.scss';

const Header = () => {
	return (
		<>
			<div className='header'>
				
				<div className="header__logo">LOREMIPSUM
					<span className="header__logo_blue">
						.NET
					</span>
				</div>
				<Nav></Nav>
			</div>
		</>
	)
}

export default Header;