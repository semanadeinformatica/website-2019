import React from "react"
import { Link } from "gatsby"
import SEO from "../components/common/seo"

import Layout from "../components/common/layout"
import Face from "../images/svg/not_found_face.inline.svg"
import Numbers from "../images/svg/not_found_numbers.inline.svg"

import NotFoundStyles from "../styles/404.module.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={NotFoundStyles.main}>
      <Face className={NotFoundStyles.face} />
      <Numbers className={NotFoundStyles.numbers} />
      <p className={NotFoundStyles.text}>Esta página não foi encontrada.</p>
      <Link to="/" className={NotFoundStyles.btn}>
        Voltar
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
