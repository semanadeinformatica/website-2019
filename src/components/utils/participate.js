import React from "react"
import { Container, Row, Col, Button } from "reactstrap"

import ParticipateStyles from "../../styles/utils/participate.module.css"

const Participate = ({ link }) => {
  
  if (!link) return null;

  return (
  <div className={ParticipateStyles.participateSection + " container-fluid"}>
    <Container>
      <Row>
        <Col xs="12" className={ParticipateStyles.colContent}>
          <div className={ParticipateStyles.participateText}>
            Não percas mais tempo!
          </div>
          <Button
            href={link}
            outline
            className={ParticipateStyles.participateButton + " mt-4"}
          >
            Participar
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
)}

export default Participate
