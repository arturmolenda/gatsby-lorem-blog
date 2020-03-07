import React from "react"

import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderText from "../components/UI/headerText"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <HeaderText sectionTitle="About Me" />
      <About />
    </Layout>
  )
}

export default AboutPage
