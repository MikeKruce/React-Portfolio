import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const initialValues = { name: '', email: '', message: '' };
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <main className="main-contact">
      <section>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="contact-form">
            <div>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Field id="message" name="message" as="textarea" />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </section>
    </main>
  );
};

export default Contact;
