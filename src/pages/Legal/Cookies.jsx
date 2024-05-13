import React from 'react'
import styles from './Legal.module.css';
import '../../App.css';

const Cookies = () => {
    return (
		<section id='cookies' className={`${styles.legal} section container`}>

							<h2>Cookie Policy</h2>
	
							<p>This Cookie Policy explains how Ecojardins ("we", "us", or "our") uses cookies and similar technologies on our website.</p>

							<h3>What are Cookies?</h3>

							<p>
								Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website
								owners.
							</p>

							<h3>How We Use Cookies</h3>

							<ul>
								<li>
									<strong>Essential Cookies:</strong> These cookies are necessary for the operation of our website. They enable basic functions like page navigation and access to secure areas of the
									website. Our website cannot function properly without these cookies.
								</li>
								<li>
									<strong>Analytics Cookies:</strong> These cookies allow us to analyze how visitors use our website, so we can measure and improve the performance of our site. We use Google
									Analytics, a popular web analytics service provided by Google, Inc. Google Analytics uses cookies to help us analyze how users use the site.
								</li>
								<li>
									<strong>Functionality Cookies:</strong> These cookies enable us to remember choices you make (such as your language preference) and provide enhanced, more personalized features.
								</li>
								<li>
									<strong>Advertising Cookies:</strong> These cookies are used to deliver advertisements that are relevant to you and your interests. They are also used to limit the number of times
									you see an advertisement, as well as to help measure the effectiveness of the advertising campaign.
								</li>
							</ul>

							<h3>Your Choices Regarding Cookies</h3>

							<p>
								You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed. If you do
								this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
							</p>

							<h3>Changes to This Policy</h3>

							<p>
								We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy
								on our website.
							</p>

							<h3>Contact Us</h3>

							<p>
								If you have any questions or concerns about our Cookie Policy or our use of cookies, please contact us at{' '}
								<a href='mailto:info@ecojardins.pt' target='_blank'>
									info@ecojardins.pt
								</a>
								.
							</p>

							<p>This Cookie Policy is effective as of 13 May 2024.</p>

			</section>
		);
};

export default Cookies