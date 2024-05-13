import React from 'react';
import Faqs from '../../components/FAQs/Faqs';
import styles from './Home.module.css';
import '../../App.css';

const Home = () => {
	return (
		<>
			<section className='section container'>
				<div className={styles.bg}>
					<h2 className={`section__title-center ${styles.title}`}>
						Steps to start your <br /> plants off right
					</h2>

					<div className={`${styles.container} grid`}>
						<div className={styles.card}>
							<div className={styles.card_number}>
								<i class='ri-seedling-line'></i>
							</div>
							<h3 className={styles.card_title}>Gardens</h3>
							<p className={styles.card_description}>Elevate your outdoors with our bespoke garden design & landscaping.</p>
						</div>

						<div className={styles.card}>
							<div className={styles.card_number}>
								<i class='ri-drop-line'></i>
							</div>
							<h3 className={styles.card_title}>Pools</h3>
							<p className={styles.card_description}>Dive into luxury with our custom pool design & construction.</p>
						</div>

						<div className={styles.card}>
							<div className={styles.card_number}>
								<i class='ri-tools-line'></i>
							</div>
							<h3 className={styles.card_title}>Construction</h3>
							<p className={styles.card_description}>Enhance your property with our expert outdoor construction.</p>
						</div>
					</div>
				</div>
			</section>

			<Faqs />
		</>
	);
};

export default Home;
