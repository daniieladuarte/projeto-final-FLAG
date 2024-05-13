import React, { useState } from 'react';
import faqs from '../../data/faqs.json';
import styles from './Faqs.module.css';
import '../../App.css';

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`${styles.item} ${styles['faq-item']} ${isOpen ? styles['accordion-open'] : ''}`} onClick={toggleAccordion}>
			<div className={`${styles.header} ${isOpen ? styles['accordion-open'] : ''}`}>
				<i className={`ri-add-line ${styles.icon}`}></i>
				<h3 className={styles.item_title}>{faq.question}</h3>
			</div>
			<div className={`${styles.content} ${styles['faq-content']}`} style={{ height: isOpen ? 'auto' : '0px' }}>
				<p className={styles.description}>{faq.answer}</p>
			</div>
		</div>
	);
};

const Faqs = () => {
	const firstThreeFaqs = faqs.slice(0, 3);
	const nextThreeFaqs = faqs.slice(3, 6);

	return (
		<section className={`${styles.questions} section`} id='faqs'>
			<h2 className={`section__title-center ${styles.title} container`}>
				Some common questions <br /> were often asked
			</h2>
			<div className={`${styles.container} container grid`}>
				<div className={styles.group}>
					{firstThreeFaqs.map(faq => (
						<FaqItem key={faq.id} faq={faq} />
					))}
				</div>
				<div className={styles.group}>
					{nextThreeFaqs.map(faq => (
						<FaqItem key={faq.id} faq={faq} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Faqs;
