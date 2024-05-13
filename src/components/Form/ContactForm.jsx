import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import signupSchema from './ValidationSchema';
import styles from './Form.module.css';
import '../../App.css';

const ContactForm = () => {
	const [formData, setFormData] = useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(signupSchema),
	});

	const submitForm = data => {
		console.log(data);
		setFormData(data);
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className={styles.inputs}>
					<div className={styles.content}>
						<input type='text' name='firstName' placeholder=' ' className={styles.input} {...register('firstName')} />
						<p> {errors && errors.firstName && errors.firstName.message} </p>
						<label htmlFor='firstName' className={styles.label}>
							First name
						</label>
					</div>

					<div className={styles.content}>
						<input type='text' name='lastName' placeholder=' ' className={styles.input} {...register('lastName')} />
						<p> {errors && errors.lastName && errors.lastName.message} </p>
						<label htmlFor='lastName' className={styles.label}>
							Last name
						</label>
					</div>

					<div className={styles.content}>
						<input type='email' name='email' placeholder=' ' className={styles.input} {...register('email')} />
						<p> {errors && errors.email && errors.email.message} </p>
						<label htmlFor='email' className={styles.label}>
							Email
						</label>
					</div>

					<div className={styles.content}>
						<input type='text' name='subject' placeholder=' ' className={styles.input} {...register('subject')} />
						<p> {errors && errors.subject && errors.subject.message} </p>
						<label htmlFor='subject' className={styles.label}>
							Subject
						</label>
					</div>

					<div className={`${styles.content} ${styles.area}`}>
						<textarea name='message' placeholder=' ' className={styles.input} {...register('message')}></textarea>
						<p> {errors && errors.message && errors.message.message} </p>
						<label htmlFor='message' className={styles.label}>
							Message
						</label>
					</div>

					<button type='submit' name='submit'>
						Send Message
						<i className='ri-arrow-right-up-line button__icon'></i>
					</button>
				</div>
			</form>

			{formData && (
				<div className='submittedData'>
					<h2>Dados Enviados:</h2>
					<pre>{JSON.stringify(formData, null, 2)}</pre>
				</div>
			)}
		</>
	);
};

export default ContactForm;
