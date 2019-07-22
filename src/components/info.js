import React from "react"
import { Container, Row, Col } from "reactstrap"
import SoonStyles from "../styles/soon.module.css"

const Info = () => {
  return (
    <Container fluid>
      <Row className={SoonStyles.info}>
        <Col xs="12" md="3" lg="2">
          <div className={SoonStyles.text_info}>
            O site está em remodelação.
            <br />
            Pedimos desculpa pelo incómodo!
          </div>
        </Col>
        <Col xs="12" md="3">
          <div className={SoonStyles.text_info + " " + SoonStyles.left_text}>
            Podem visitar a nossa página do facebook{" "}
            <a
              href="https://facebook.com/semanainformaticaFEUP"
              className={SoonStyles.facebook_link}
            >
              facebook.com/semanainformaticaFEUP{" "}
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Info
