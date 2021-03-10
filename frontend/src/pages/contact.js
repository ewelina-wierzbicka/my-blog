import React from 'react'
import Layout from '../components/layout'
import { useFormik } from 'formik';
import contactSchema from '../schemas/contactSchema'
import styled from "styled-components"

const ContactHeader = styled.h1`
font-size: calc(2vw + 6px);
text-align: center;
margin-top: 4vw;
`

const ContactForm = styled.form`
margin: 5vw auto;
width: calc(20vw + 100px);
& > * {
    display: block;
    width: 100%;
    font-size: calc(1vw + 5px);
}
& label {
    margin-top: 20px;
    margin-bottom: 5px;
}
& input {
    height: calc(1.5vw + 20px);
}
& textarea {
    height: calc(10vw + 50px);
}
& button {
    width: 100px;
    height: 30px;
    margin: 40px auto;
}
`

const ErrorMessage = styled.div`
color: red;
font-size: calc(0.5vw + 7px);
`

const Contact = () => {
        const formik = useFormik({
          initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          },
          validationSchema: contactSchema,
          onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
        });
    return (
        <Layout>
            <ContactHeader>Napisz do mnie</ContactHeader>
            <ContactForm onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Imię</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       {formik.errors.firstName && formik.touched.firstName ? (
            <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
          ) : null}
       <label htmlFor="lastName">Nazwisko</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       {formik.errors.lastName && formik.touched.lastName ? (
            <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
          ) : null}
       <label htmlFor="email">Adres mailowy</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       {formik.errors.email && formik.touched.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
       <label htmlFor="message">Wiadomość</label>
       <textarea
         id="message"
         name="message"
         wrap="soft"
         onChange={formik.handleChange}
         value={formik.values.message}
       />
       {formik.errors.message && formik.touched.message ? (
            <ErrorMessage>{formik.errors.message}</ErrorMessage>
          ) : null}
       <button type="submit">Wyślij</button>
            </ContactForm>
        </Layout>
    )
}

export default Contact
