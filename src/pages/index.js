import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import SEO from "../components/common/seo"
import Navbar from "../components/common/navbar"

import About from "../components/mainpage/about/about"
import Tickets from "../components/mainpage/tickets"
import Speakers from "../components/mainpage/speakers"
import Banner from "../components/mainpage/banner/banner"
import Contacts from "../components/mainpage/contacts/wrapper"

import MainpageStyles from "../styles/mainpage/mainpage.module.css"

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
    <About />
    <Speakers />
    <Tickets />
    {/* <Sponsors /> */}
    <Contacts />
  </div>
)
export default IndexPage
