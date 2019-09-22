import React from "react"
import { Link } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import Competition from "../components/competition"

const CompetitionPage = () => (
  <Layout>
    <SEO title="Competição de programação" />
    <Competition />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CompetitionPage
