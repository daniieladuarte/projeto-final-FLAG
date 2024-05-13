import React from 'react';
import styles from './About.module.css';
import '../../App.css';

const About = () => {
	return (
		<section className='section container' id='about'>
			<div className={`${styles.container} grid`}>
				<img src='/about.png' alt='' className={styles.img} />

				<div>
					<h2 className={`section__title ${styles.title}`}>
						Who we really are & <br /> why choose us
					</h2>

					<p className={styles.description}>We have over 4000+ unbiased reviews and our customers trust our plant process and delivery service every time</p>

					<div className={styles.details}>
						<p className={styles.details_description}>
							<i className={`ri-checkbox-fill ${styles.details_icon}`}></i>
							We always deliver on time.
						</p>
						<p className={styles.details_description}>
							<i className={`ri-checkbox-fill ${styles.details_icon}`}></i>
							We give you guides to protect and care for your plants.
						</p>
						<p className={styles.details_description}>
							<i className={`ri-checkbox-fill ${styles.details_icon}`}></i>
							We always come over for a check-up after sale.
						</p>
						<p className={styles.details_description}>
							<i className={`ri-checkbox-fill ${styles.details_icon}`}></i>
							100% money back guaranteed.
						</p>
					</div>

					<a href='#' className='button--link button--flex'>
						Shop Now <i className='ri-arrow-right-down-line button__icon'></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
