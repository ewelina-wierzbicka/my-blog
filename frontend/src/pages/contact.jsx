import React, { useEffect } from "react"
import { useFormik } from "formik"
import styled from "styled-components"
import { useMutation } from "graphql-hooks"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Layout from "../components/layout"
import contactSchema from "../schemas/contactSchema"
import client from "../../graphQlClient"

const EMAIL_MUTATION = `mutation SendContact($email: EmailInput!) {
  createEmail(data: $email) {
    data {
      id
    }
  }
}`

const ContactHeader = styled.h1`
  font-size: calc(2vw + 6px);
  text-align: center;
  margin-top: 4vw;
`

const ContactForm = styled.form`
  margin: 5vw auto;
  width: calc(20vw + 100px);
  & * {
    display: block;
    width: 100%;
    font-size: calc(0.5vw + 10px);
  }
  & label {
    margin-top: 20px;
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
const Input = styled.input`
  margin-top: 10px;
  padding: 0 6px;
`

const Textarea = styled.textarea`
  margin-top: 10px;
  padding: 6px;
`

const ErrorMessage = styled.div`
  color: red;
  font-size: calc(0.5vw + 7px);
`

const Button = styled.button`
  background-color: #212036;
  color: #ffffff;
  border: none;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
`

const Contact = () => {
  const [createEmail, state] = useMutation(EMAIL_MUTATION, { client })
  const formik = useFormik({
    initialValues: {
      firstname: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: values => {
      createEmail({ variables: { email: values } })
    },
  })
  useEffect(() => {
    if (state.data?.createEmail) {
      toast.success("Mail zostal wysłany")
      formik.resetForm()
    } else if (state.error) {
      toast.error("Wystąpił błąd")
    }
  }, [state.data, state.error])

  return (
    <Layout>
      <ContactHeader>Napisz do mnie</ContactHeader>
      <ContactForm onSubmit={formik.handleSubmit}>
        <label htmlFor="firstname">
          Imię
          <Input
            id="firstname"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
        </label>
        {formik.errors.firstname && formik.touched.firstname ? (
          <ErrorMessage>{formik.errors.firstname}</ErrorMessage>
        ) : null}
        <label htmlFor="email">Adres mailowy
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        </label>
        {formik.errors.email && formik.touched.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
        <label htmlFor="message">
          Wiadomość
          <Textarea
            id="message"
            name="message"
            wrap="soft"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </label>
        {formik.errors.message && formik.touched.message ? (
          <ErrorMessage>{formik.errors.message}</ErrorMessage>
        ) : null}
        <Button type="submit">WYŚLIJ</Button>
      </ContactForm>
      <ToastContainer />
    </Layout>
  )
}

export default Contact
