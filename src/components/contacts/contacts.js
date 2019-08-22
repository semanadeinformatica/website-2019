import React from "react"
import { Container, Col, Row } from "reactstrap"
import {
  FaEnvelope,
  FaLinkedin,
  FaFacebookSquare,
  FaMapMarkerAlt,
} from "react-icons/fa"

import ContactStyles from "../../styles/contacts.module.css"

const links = [
  {
    icon: <FaEnvelope />,
    href: "mailto:geral@sinf.pt",
    text: "geral@sinf.pt",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/semanainformaticafeup/",
    text: "sinffeup",
  },
  {
    icon: <FaFacebookSquare />,
    href: "https://facebook.com/semanainformaticaFEUP",
    text: "sinfFEUP",
  },
]

const location = {
  icon: <FaMapMarkerAlt />,
  href:
    "https://www.google.com/maps/place/FEUP+-+Faculdade+de+Engenharia+da+Universidade+do+Porto/@41.17794,-8.597688,15z/data=!4m5!3m4!1s0x0:0x8b1e4a0bcdacc840!8m2!3d41.1779401!4d-8.5976876?hl=en-US",
  text: "R. Dr. Roberto Frias, 4200-465 Porto, Portugal",
}

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
                    <span className={ContactStyles.icon}>{link.icon}</span>
                    {link.text}
                  </a>
                </Row>
              </Col>
            )
          })}
        </Col>
        <Col className={ContactStyles.info_col}>
          <a href={location.href} className={ContactStyles.location_link}>
            <span className={ContactStyles.icon}>{location.icon}</span>
            {location.text}
          </a>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Contacts
