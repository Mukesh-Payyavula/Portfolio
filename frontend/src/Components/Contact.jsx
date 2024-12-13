import React, {useState} from 'react'
import { Badge, Button, Card, CardBody, CardTitle, Col, Container, Form, Row } from 'react-bootstrap'
import axios from 'axios';
import * as formik from 'formik';
import * as yup from 'yup';

const Contact = () => {

  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
  });

  const [validated, setValidated] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // const formValidated = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  
  // const baseUrl = 'http://localhost:8000';
  const baseUrl = 'https://portfolio-backend-vert-kappa.vercel.app';

  const sendEmail = async (values) => { 
    setFormStatus('pending');

    await axios.post(`${baseUrl}/sendEmail`, values)
    .then( (res) => {
      console.log(res);
      if (res.status === 200) {
        setFormStatus('success');
      } else {
        setFormStatus('failure');
      }
    }).catch((err) => {
      console.log(err)
    })
  };



  return (
    <div id='contact' className='pb-5 mb-5'>
      <Container>
        <Row className='justify-content-center'>
          <Card className="border-none py-3">
            <CardBody className="text-center">
              <CardTitle as="h2">Contact</CardTitle>
            </CardBody>
          </Card>
          <Col xs={12} md={8}>
            <Badge id='formMes' bg={formStatus === 'success' ? 'success' : formStatus === 'failure' ? 'danger' : 'info'} className={formStatus === 'pending' ? 'formPen' : formStatus === 'success' ? 'formSucc' : formStatus === 'failure' ? 'formError' : ''}>
              {formStatus === 'pending' ? 'Sending...' : formStatus === 'success' ? 'Submited Successfully!' : formStatus === 'failure' ? 'Failed to send. Please try again.' : ''}
            </Badge>
            <Formik
              validationSchema={schema}
              onSubmit={ (values, {resetForm}) => {
                sendEmail(values);

                resetForm({ values: "" });
              }}
              initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
              }}
            >
             {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate validated={touched && validated}  onSubmit={handleSubmit}>
                <Row className='mb-3'>
                <Form.Group as={Col} controlId='formGridName'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' name='name' value={values.name} onChange={handleChange} placeholder='Enter name' isInvalid={touched.name && errors.name} required />
                  <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' name='email' value={values.email} onChange={handleChange} placeholder='Enter email'  isInvalid={touched.email && errors.email} required />
                  <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className='mb-3'>
                <Form.Group as={Col} controlId='formGridSubject'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type='text' name='subject' value={values.subject} onChange={handleChange} placeholder='Enter Subject' isInvalid={touched.subject && errors.subject} required />
                  <Form.Control.Feedback type='invalid'>{errors.subject}</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className='mb-3'>
                <Form.Group className='mb-3' controlId='formGridMessage'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as='textarea' name='message' value={values.message} onChange={handleChange} rows={3} placeholder='Enter Message' isInvalid={touched.message && errors.message} required />
                  <Form.Control.Feedback type='invalid'>{errors.message}</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Button type='submit' className='btn-cutom-color'>
                Submit
                </Button>
              </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact