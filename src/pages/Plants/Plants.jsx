import React, { useState, useEffect } from 'react';
import styles from './Plants.module.css';
import '../../App.css';

const Plants = () => {
	const [plantList, setPlantList] = useState([]);

	useEffect(() => {
		const loadPlants = async () => {
			try {
				const response = await fetch('https://perenual.com/api/species-list?key=sk-sgJx66296adcc8adb4989');
				const data = await response.json();
				setPlantList(data.data);
			} catch (error) {
				console.error(error);
			}
		};
		loadPlants();
	}, []);

	return (
		<section className='section container' id='products'>
			<h2 className='section__title-center'>
				Check out our <br /> plants
			</h2>

			<p className={styles.description}>
				Here are some selected plants from our provider, all are in excellent shape and have a long life span. Explore the options we have based on look and watering frequency.
			</p>

			<div className={`${styles.container} grid`}>
				{plantList.slice(0, 21).map((plant, index) => (
					<article className={styles.card} key={index}>
						<img src={!plant.default_image?.original_url ? 'https://via.placeholder.com/120' : plant.default_image?.original_url} alt='' className={styles.img} />
						<h3 className={styles.title}>{plant.common_name}</h3>
						<span className={styles.info}>Watering: {plant.watering}</span>
					</article>
				))}
			</div>
		</section>
	);
};

export default Plants;
