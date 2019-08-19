import React from "react"
import { Container, Col, Row } from "reactstrap"

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
]

const location = {
  icon: faMapMarkerAlt,
  href:
    "https://www.google.com/maps/place/FEUP+-+Faculdade+de+Engenharia+da+Universidade+do+Porto/@41.17794,-8.597688,15z/data=!4m5!3m4!1s0x0:0x8b1e4a0bcdacc840!8m2!3d41.1779401!4d-8.5976876?hl=en-US",
  text: "R. Dr. Roberto Frias, 4200-465 Porto, Portugal",
}

const icon_size = "2x"

const Contacts = () => (
  <div>
    <Col className={ContactStyles.title_container}>
      <h2 className={ContactStyles.title}>Contacta-nos:</h2>
      <hr className={ContactStyles.title_bar} />
    </Col>

    <Container>
      <Row className={ContactStyles.info_row}>
        <Col className={ContactStyles.info_col}>
          {links.map((link, index) => {
            return (
              <Col key={index}>
                <Row>
                  <a href={link.href} className={ContactStyles.link}>
                    <FontAwesomeIcon
                      icon={link.icon}
                      className={ContactStyles.icon}
                      size={icon_size}
                    />
                    {link.text}
                  </a>
                </Row>
              </Col>
            )
          })}
        </Col>
        <Col className={ContactStyles.info_col}>
          <a href={location.href} className={ContactStyles.location_link}>
            <FontAwesomeIcon
              icon={location.icon}
              className={ContactStyles.icon}
              size={icon_size}
            />
            {location.text}
          </a>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Contacts
