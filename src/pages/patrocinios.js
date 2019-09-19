import React from "react"
import { Link } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import Sponsors from "../components/mainpage/sponsors/sponsors"

const SponsorsPage = () => (
  <Layout>
    <SEO title="Patrocínios" />
    <Sponsors />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SponsorsPage
