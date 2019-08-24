import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const AboutUsPage = () => (
  <>
    <SEO title="Sobre nós" />
    <About />
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default AboutUsPage
