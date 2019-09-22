import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import SEO from "../components/common/seo"
import Navbar from "../components/common/navbar"
import Layout from "../components/common/layout"

import Banner from "../components/mainpage/banner/banner"
import About from "../components/mainpage/about/about"
import Speakers from "../components/mainpage/speakers/speakers"
import Tickets from "../components/mainpage/tickets"
import Sponsors from "../components/mainpage/sponsors/sponsors"
import Contacts from "../components/mainpage/contacts/wrapper"

import MainpageStyles from "../styles/mainpage/mainpage.module.css"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className={MainpageStyles.top_bar}>
      <Navbar transparent />
    </div>
    <Banner />
    <Layout>
      <About />
      <Speakers />
      <Tickets />
      <Sponsors />
      <Contacts />
    </Layout>
  </div>
)
export default IndexPage
