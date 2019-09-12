import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import About from "../components/about/about"

const AboutUsPage = () => (
  <>
    <SEO title="Sobre nós" />
    <About />
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default AboutUsPage
