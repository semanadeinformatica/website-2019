import React from "react"
import { Container, Row, Col } from "reactstrap"
import SoonStyles from "../../styles/soon.module.css"
import { FaLinkedin, FaFacebookSquare, FaEnvelope } from "react-icons/fa"

const links = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/sinffeup/",
  },
  {
    icon: <FaFacebookSquare />,
    href: "https://facebook.com/sinfFEUP",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:geral@sinf.pt",
  },
]

const Info = () => {
  return (
    <Container fluid>
      <Row className={SoonStyles.info}>
        <Col xs="12" md="5">
          <div className={SoonStyles.text_info}>
            O site está em remodelação.
            <br />
            Pedimos desculpa pelo incómodo!
          </div>
        </Col>
        <Col xs="12" md="5">
          <div className={SoonStyles.text_info + " " + SoonStyles.left_text}>
            <div className={SoonStyles.icon_links}>
              {links.map(({ icon, href }, index) => (
                <a href={href} className={SoonStyles.icon_link} key={index}>
                  {icon}
                </a>
              ))}
            </div>
            <p>28 a 30 outubro | FEUP</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Info
