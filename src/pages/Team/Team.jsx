import React from 'react';
import team from '../../data/team.json';
import styles from './Team.module.css';
import '../../App.css';

const Team = () => {
	return (
		<div className={`${styles.team} section container`} id='team'>
			{team.map(member => (
				<div className={styles.card} key={member.id}>
					<div className={styles.img}>
						<img src={member.image} alt={member.name} />
					</div>
					<div className={styles.content}>
						<h3>{member.name}</h3>
						<h4>{member.job}</h4>
						<p>
							<span>Hobby:</span> {member.hobby}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Team;
