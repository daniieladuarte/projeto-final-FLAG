import React from 'react';
import styles from './Contact.module.css';
import '../../App.css';
import Form from '../../components/Form/ContactForm';

const Contact = () => {
	return (
		<section className='section container' id='contact'>
			<div className={`${styles.container} grid`}>
				<div>
					<h2 className='section__title'>
						Reach out to us today <br /> via any of the given <br /> information
					</h2>

					<div className={styles.data}>
						<div>
							<h3 className={styles.subtitle}>Call us for instant support</h3>
							<span className={styles.description}>
								<i className={`ri-phone-line ${styles.icon}`}></i>
								+351 912 345 678
							</span>
						</div>

						<div>
							<h3 className={styles.subtitle}>Write us by mail</h3>
							<span className={styles.description}>
								<i className={`ri-mail-line ${styles.icon}`}></i>
								info@ecojardins.com
							</span>
						</div>
					</div>
				</div>
				<Form />
			</div>
		</section>
	);
};

export default Contact;
