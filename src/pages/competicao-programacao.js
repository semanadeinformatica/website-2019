import React from "react"
import { Link } from "gatsby"

import SEO from "../components/common/seo"
import Layout from "../components/common/layout"

import Competition from "../components/competition"
import PageBanner from "../components/utils/page_banner"

import Icon from "../images/svg/competicao.inline.svg"

const CompetitionPage = () => (
  <Layout>
    <SEO title="Competição de programação" />
    <PageBanner>
      <Icon />
    </PageBanner>
    <Competition />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CompetitionPage
