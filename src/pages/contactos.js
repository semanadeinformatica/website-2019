import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contacts from "../components/contacts"

const ContactsPage = () => (
  <Layout>
    <SEO title="Contactos" />
    <Contacts />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactsPage
