import React from "react"

import SEO from "../components/common/seo"
import Layout from "../components/common/layout"

import Competition from "../components/competition/competition"
import PageBanner from "../components/utils/page_banner"

import Icon from "../images/svg/competicao.inline.svg"

const CompetitionPage = () => (
  <Layout>
    <SEO title="Competição de programação" />
    <PageBanner>
      <Icon />
    </PageBanner>
    <Competition />
  </Layout>
)

export default CompetitionPage
