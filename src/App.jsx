import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

/* import components */
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

/* import pages */
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Team from './pages/Team/Team';
import Privacy from './pages/Legal/Privacy';
import Cookies from './pages/Legal/Cookies';
import Plants from './pages/Plants/Plants';

function App() {
	function scrollHeader() {
		const header = document.getElementById('header');
		if (this.scrollY >= 80) header.classList.add('scroll-header');
		else header.classList.remove('scroll-header');
	}
	window.addEventListener('scroll', scrollHeader);

	return (
		<>
			<BrowserRouter>
				<header className='header' id='header'>
					<Nav />
				</header>
				<main className='main'>
					<Hero />
					<Routes>
						<Route path='/' element={<Home />} index />
						<Route path='/about' element={<About />} />
						<Route path='/team' element={<Team />} />
						<Route path='/plants' element={<Plants />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/privacy-policy' element={<Privacy />} />
						<Route path='/cookie-policy' element={<Cookies />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
