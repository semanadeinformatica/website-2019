import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Competition from "../components/competition"

const CompetitionPage = () => (
  <Layout>
    <SEO title="Competição de programação" />
    <Competition />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CompetitionPage