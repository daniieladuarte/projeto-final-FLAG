import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Nav.module.css';
import '../../App.css';
import { RiCloseFill, RiMenuFill } from 'react-icons/ri';

const Nav = () => {
	return (
		<nav className={`${styles.nav} container`}>
			<Link to='/' className={styles.logo}>
				<i className={`ri-leaf-line ${styles.logo_icon}`}></i> Ecojardins
			</Link>

			<div className={styles.menu} id='nav-menu'>
				<ul className={styles.list}>
					<li className={styles.item}>
						<NavLink to='/' className={`${styles.link} nav-link`}>
							Home
						</NavLink>
					</li>
					<li className={styles.item}>
						<NavLink to='/about' className={`${styles.link} nav-link`}>
							About
						</NavLink>
					</li>
					<li className={styles.item}>
						<NavLink to='/plants' className={`${styles.link} nav-link`}>
							Plants
						</NavLink>
					</li>
					<li className={styles.item}>
						<NavLink to='/team' className={`${styles.link} nav-link`}>
							Team
						</NavLink>
					</li>
					<li className={styles.item}>
						<NavLink to='/contact' className={`${styles.link} nav-link`}>
							Contact Us
						</NavLink>
					</li>
				</ul>

				<button className={styles.close} id='nav-close'>
					<RiCloseFill />
				</button>
			</div>

			<div className={styles.btns}>
				<button className={styles.toggle} id='nav-toggle'>
					<RiMenuFill />
				</button>
			</div>
		</nav>
	);
};

export default Nav;
