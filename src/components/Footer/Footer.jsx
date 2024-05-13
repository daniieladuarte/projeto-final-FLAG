import React from 'react';
import styles from './Footer.module.css';
import '../../App.css';

const Footer = () => {
	return (
		<footer className='section'>
			<div className={`${styles.container} container grid`}>
				<div className={styles.content}>
					<a href='#' className={styles.logo}>
						<i className={`ri-leaf-line ${styles.logo_icon}`}></i> Ecojardins
					</a>

					<h3 className={styles.title}>
						Subscribe to our newsletter <br /> to stay updated
					</h3>

					<div className={styles.subscribe}>
						<input type='email' placeholder='Enter your email' className={styles.input} />

						<button className={`button button--flex ${styles.button}`}>
							Subscribe
							<i className={`ri-arrow-right-up-line ${styles.icon}`}></i>
						</button>
					</div>
				</div>

				<div className={styles.content}>
					<h3 className={styles.title}>Our Address</h3>

					<ul className={styles.data}>
						<li className={styles.information}>Portugal</li>
						<li className={styles.information}>Rua das Romãzeiras - Cascais</li>
						<li className={styles.information}>2750-479</li>
					</ul>
				</div>

				<div className={styles.content}>
					<h3 className={styles.title}>Contact Us</h3>

					<ul className={styles.data}>
						<li className={styles.information}>+351 912 345 678</li>

						<div className={styles.social}>
							<a href='https://www.facebook.com/' className={styles.social_link}>
								<i className='ri-facebook-fill'></i>
							</a>
							<a href='https://www.instagram.com/' className={styles.social_link}>
								<i className='ri-instagram-line'></i>
							</a>
							<a href='https://twitter.com/' className={styles.social_link}>
								<i className='ri-twitter-fill'></i>
							</a>
						</div>
					</ul>
				</div>

				<div className={styles.content}>
					<h3 className={styles.title}>Check our policies</h3>

					<ul className={styles.data}>
						<li className={styles.information}>
							<a href='/privacy-policy'>Privacy policy</a>
						</li>
						<li className={styles.information}>
							<a href='/cookie-policy'>Cookie policy</a>
						</li>
					</ul>
				</div>
			</div>

			<p className={styles.copy}>&#169; Ecojardins 2024. All rights reserved</p>
		</footer>
	);
};

export default Footer;
