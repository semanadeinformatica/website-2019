import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Contacts from "../components/contacts/wrapper"

const ContactsPage = () => (
  <>
    <SEO title="Contactos" />
    <Contacts />
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default ContactsPage
