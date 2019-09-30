import React from "react"
import { Container, Row, Col } from "reactstrap"

import competitionStyles from "../styles/competition/competition.module.css"

const Competition = () => (
  <div>
    <Container>
      <Row>
        <Col
          xs="12"
          className={competitionStyles.competitionText + " my-4 py-5"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vitae pulvinar orci, et placerat diam. Proin eu nulla lacus. Cras eu
          pellentesque nisl. Integer quis blandit dolor, a egestas lorem.
          Vestibulum sem nisl, cursus sed tristique nec, pulvinar lacinia risus.
          Suspendisse maximus mattis hendrerit. In eget lacinia eros. In tempor
          sollicitudin lobortis. Fusce interdum aliquam consectetur. Curabitur
          volutpat nisl ut tristique fermentum.
        </Col>
      </Row>
    </Container>

    <div className={competitionStyles.conditions + " container-fluid"}>
      <Container>
        <Row>
          <Col className={competitionStyles.conditionsText}>
            Condições
            <hr align="left" className={competitionStyles.horizontalRuler} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" className={competitionStyles.conditionList}>
            <ul>
              <li>Regra 1</li>
              <li>Regra 2</li>
              <li>Regra 3</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
)

export default Competition
