import React from "react"
import { Row, Col } from "reactstrap"

const Participate = ({ registration }) => (
  <Row>
    <Col>
      <h1>Não percas mais tempo!</h1>
      <a
        type="button"
        href={registration}
        target="_blank"
        rel="noopener noreferrer"
      >
        Participar
      </a>
    </Col>
  </Row>
)

export default Participate
