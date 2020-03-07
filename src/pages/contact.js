import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderText from "../components/UI/headerText"
import ContactForm from "../components/UI/contact-form/contactForm"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <HeaderText sectionTitle="Contact Me"></HeaderText>
      <ContactForm />
    </Layout>
  )
}

export default Contact
