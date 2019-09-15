import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/common/seo"
import Sponsors from "../components/sponsors"

const SponsorsPage = () => (
  <Layout>
    <SEO title="Patrocínios" />
    <Sponsors />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SponsorsPage
