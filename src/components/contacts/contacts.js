import React from "react"
import { Col, Row } from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

import ContactStyles from "../../styles/contacts.module.css"

const links = [
  {
    icon: faEnvelope,
    href: "mailto:geral@sinf.pt",
    text: "geral@sinf.pt",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/company/semanainformaticafeup/",
    text: "sinffeup",
  },
  {
    icon: faFacebookSquare,
    href: "https://facebook.com/semanainformaticaFEUP",
    text: "sinfFEUP",
  },

  {
    icon: faMapMarkerAlt,
    href:
      "https://www.google.com/maps/place/FEUP+-+Faculdade+de+Engenharia+da+Universidade+do+Porto/@41.17794,-8.597688,15z/data=!4m5!3m4!1s0x0:0x8b1e4a0bcdacc840!8m2!3d41.1779401!4d-8.5976876?hl=en-US",
    text: "R. Dr. Roberto Frias, 4200-465 Porto, Portugal",
  },
]

const Contacts = () => (
  <div>
    <h2 className={ContactStyles.title}>Contacta-nos:</h2>
    {links.map((link, index) => {
      return (
        <Col key={index}>
          <Row>
            <a href={link.href}>
              <FontAwesomeIcon icon={link.icon} />
              {"  " + link.text}
            </a>
          </Row>
        </Col>
      )
    })}
  </div>
)

export default Contacts
