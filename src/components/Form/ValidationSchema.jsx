import * as yup from 'yup';

const signupSchema = yup.object().shape({
	firstName: yup.string().required('First name is required'),
	lastName: yup.string().required('Last name is required'),
	email: yup.string().email('Insert a valid email').required('Email is required'),
	age: yup
		.number()
		.typeError('Age must be a valid number')
		.min(18, 'You must be at least 18 years old')
		.positive()
		.integer()
        .required('Age is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
});

export default signupSchema;
