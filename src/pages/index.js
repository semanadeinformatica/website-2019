import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Banner from "../components/mainpage/banner"
import Contacts from "../components/contacts/wrapper"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Banner />
    {/* <Navbar /> */}
    <Contacts />
  </div>
)
export default IndexPage
