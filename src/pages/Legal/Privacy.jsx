import React from 'react'
import styles from './Legal.module.css';
import '../../App.css';

const Privacy = () => {
    return (
			<section id='privacy' className={`${styles.legal} section container`}>
				<h2>Privacy Policy</h2>

				<p>Ecojardins is committed to protecting the privacy of users of its website. This privacy policy describes how we collect, use, share, and protect users' personal information.</p>

				<h3>Information Collected</h3>

				<p>
					<strong>Personal Information:</strong> We may collect personal information provided by users voluntarily, such as name, email address, phone number, postal address, etc., during registration
					on the website, filling out contact forms, or when making a purchase.
				</p>

				<p>
					<strong>Browsing Information:</strong> We may collect information about the user's device, IP address, browser used, pages visited, and time spent on the website. This information is
					collected automatically through cookies and similar technologies.
				</p>

				<h3>Use of Information</h3>

				<p>
					Users' personal information may be used to provide requested services, process transactions, respond to inquiries, send information about products and services, and enhance the user
					experience on the website.
				</p>

				<p>Browsing information may be used to personalize website content, understand user preferences, improve website security, and conduct analytics to enhance our services.</p>

				<h3>Sharing of Information</h3>

				<p>
					Ecojardins may share personal information with third-party service providers who assist in website operation, transaction processing, communication delivery, among others. These service
					providers are required to maintain the confidentiality of information and are not authorized to use it for other purposes.
				</p>

				<p>We may share personal information when required by law or to protect the rights, property, or safety of Ecojardins, its users, or third parties.</p>

				<h3>Security of Information</h3>

				<p>Ecojardins implements appropriate security measures to protect users' personal information against unauthorized access, alteration, disclosure, or unauthorized destruction.</p>

				<h3>Changes to the Privacy Policy</h3>

				<p>
					This privacy policy may be updated periodically to reflect changes in information collection, use, and sharing practices. We recommend that users review this policy regularly to be aware of
					any updates.
				</p>

				<h3>Contact</h3>

				<p>If users have questions, concerns, or wish to exercise their privacy rights, they can contact us using the information provided on the website.</p>

				<p>This privacy policy is effective as of 13 May 2024.</p>
			</section>
		);
};

export default Privacy