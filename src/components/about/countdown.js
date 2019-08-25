import React from "react"
import { Container, Row, Col } from "reactstrap"

import AboutStyles from "../../styles/about.module.css"

const Countdown = () => (
  <Container className="py-3">
    <Row>
      <Col xs={{ size: 2, offset: 2 }} className={AboutStyles.number}>
        04
      </Col>
      <Col xs="4" className={AboutStyles.number}>
        04
      </Col>
      <Col xs="2" className={AboutStyles.number}>
        04
      </Col>
    </Row>
    <Row>
      <Col xs={{ size: 2, offset: 2 }} className="text-center">
        meses
      </Col>
      <Col xs="4" className="text-center">
        dias
      </Col>
      <Col xs="2" className="text-center">
        horas
      </Col>
    </Row>
  </Container>
)

export default Countdown
