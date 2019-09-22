/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import Footer from "./footer"

import Utils from "../../styles/utils/utils.module.css"

const Layout = ({ children }) => (
  <>
    <div className={Utils.sticky}>
      <Navbar logo />
    </div>
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
