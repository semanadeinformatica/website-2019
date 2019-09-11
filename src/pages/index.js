import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import SEO from "../components/seo"
import Navbar from "../components/navbar"

import Tickets from "../components/tickets"
import Speakers from "../components/speakers"
import Banner from "../components/mainpage/banner"
import Contacts from "../components/contacts/wrapper"

import MainpageStyles from "../styles/mainpage.module.css"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className={MainpageStyles.top_bar}>
      <Navbar transparent />
    </div>
    <Banner />
    <div className={MainpageStyles.sticky}>
      <Navbar logo />
    </div>
    <Tickets />
    <Speakers />
    <Contacts />
    <Contacts />
    <Contacts />
    <Contacts />
    <Contacts />
  </div>
)
export default IndexPage
