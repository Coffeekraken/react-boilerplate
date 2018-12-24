import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import Card from '@/components/Card'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
})

export default () => (
  <div className="page">
    <Card className="form">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            /* eslint-disable-next-line */
            console.log(values)
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="email"
              name="email"
              className="form-input"
              placeholder="Username"
            />
            <ErrorMessage name="email" component="div" className="m-t-small" />
            <Field
              type="password"
              name="password"
              className="form-input m-t"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="m-t-small"
            />
            <button
              className="btn btn--primary btn--block m-t"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Card>
  </div>
)
