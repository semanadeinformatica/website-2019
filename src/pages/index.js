import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Banner from "../components/mainpage/banner"
import Contacts from "../components/contacts/wrapper"

import MainpageStyles from "../styles/mainpage.module.css"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Banner />
    <span className={MainpageStyles.sticky}>
      <Navbar logo />
    </span>
    <Contacts />
    <Contacts />
    <Contacts />
    <Contacts />
    <Contacts />
  </div>
)
export default IndexPage
