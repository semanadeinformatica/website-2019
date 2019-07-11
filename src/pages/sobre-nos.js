import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const AboutUsPage = () => (
  <Layout>
    <SEO title="Sobre nós" />
    <About />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutUsPage
