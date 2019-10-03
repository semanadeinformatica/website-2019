import React from "react"
import { Container, Row, Col, Button } from "reactstrap"

import ParticipateStyles from "../../styles/competition/participate.module.css"

const Participate = link => {
  return (
    <div className={ParticipateStyles.participateSection + " container-fluid"}>
      <Container>
        <Row>
          <Col xs="12" className={ParticipateStyles.colContent}>
            <div className={ParticipateStyles.participateText}>
              Não percas mais tempo!
            </div>
            <Button
              outline
              color="primary"
              className={ParticipateStyles.participateButton + " mt-4"}
            >
              Participate
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Participate
