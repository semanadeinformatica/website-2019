import React from "react"

import SEO from "../components/seo"
import SoonStyles from "../styles/soon.module.css"
import Brevemente from "../components/brevemente"

const IndexPage = () => (
  <div className={SoonStyles.background}>
    <SEO title="Coming Soon" />
    <Brevemente />
  </div>
)

export default IndexPage
