import React from 'react';
import styles from './Hero.module.css';
import '../../App.css';

const Hero = () => {
	return (
		<section className={styles.home} id='home'>
			<div className={`${styles.container} container grid`}>
				<img src='/home.png' alt='' className={styles.img} />

				<div className={styles.data}>
					<h1 className={styles.title}>Ecojardins</h1>
					<p className={styles.description}>Create incredible outdoor spaces and indoor gardens. Add freshness to your new ideas.</p>
					<a href='/about' className='button button--flex'>
						Explore <i className='ri-arrow-right-down-line button__icon'></i>
					</a>
				</div>

				<div className={styles.social}>
					<span className={styles.social_follow}>Follow Us</span>

					<div className={styles.social_links}>
						<a href='https://www.facebook.com/' target='_blank' className={styles.social_link}>
							<i className='ri-facebook-fill'></i>
						</a>
						<a href='https://www.instagram.com/' target='_blank' className={styles.social_link}>
							<i className='ri-instagram-line'></i>
						</a>
						<a href='https://twitter.com/' target='_blank' className={styles.social_link}>
							<i className='ri-twitter-fill'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
