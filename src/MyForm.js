// MyForm.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
  const initialValues = {
    name: '',
    email: '',
    country: '',
    gender: '',
    fruits: [],
    dob: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Name must be at least 3 characters').max(15, 'Name must be 15 characters or less').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    country: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    fruits: Yup.array().min(1, 'Select at least one fruit').required('Required'),
    dob: Yup.date().required('Required'),
    message: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <Field as="select" id="country" name="country">
            <option value="">Select Country</option>
            {/* Add country options */}
          </Field>
          <ErrorMessage name="country" component="div" />
        </div>

        <div>
          <label>Gender:</label>
          <div>
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
          </div>
          <ErrorMessage name="gender" component="div" />
        </div>

        <div>
          <label>Fruits:</label>
          <div>
            <label>
              <Field type="checkbox" name="fruits" value="apple" />
              Apple
            </label>
            <label>
              <Field type="checkbox" name="fruits" value="orange" />
              Orange
            </label>
            <label>
              <Field type="checkbox" name="fruits" value="watermelon" />
              Watermelon
            </label>
          </div>
          <ErrorMessage name="fruits" component="div" />
        </div>

        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <Field type="date" id="dob" name="dob" />
          <ErrorMessage name="dob" component="div" />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage name="message" component="div" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default MyForm;
