import './AboutUs.scss';
import Header from '../../components/header/Header';

const AboutUs = () => {
	return (
		<>
			<Header></Header>
			<div>
				<h1 className='title'>Our company will help you solve the following issues</h1>
				<ul>
					<li>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</li>
					<li>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit</li>
					<li>Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum</li>
					<li>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id</li>
				</ul>
			</div>
		</>
	)
}

export default AboutUs;
