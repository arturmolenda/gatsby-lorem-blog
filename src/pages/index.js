import React from "react"

import Home from "../components/home"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderText from "../components/UI/headerText"

import "../styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderText sectionTitle="Welcome to lorem blog" />
    <Home />
  </Layout>
)

export default IndexPage
