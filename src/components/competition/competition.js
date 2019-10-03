import React from "react"
import { Container, Row, Col } from "reactstrap"

import Prize from "../competition/prize"

import CompetitionStyles from "../../styles/competition/competition.module.css"

const Competition = () => (
  <div>
    <Container>
      <Row>
        <Col
          xs="12"
          className={CompetitionStyles.competitionText + " my-4 py-5"}
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

    <div className={CompetitionStyles.conditions + " container-fluid pt-4"}>
      <Container>
        <Row>
          <Col className={CompetitionStyles.conditionsText}>
            Condições
            <hr align="left" className={CompetitionStyles.horizontalRuler} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" className={CompetitionStyles.conditionList}>
            <ul>
              <li>Regra 1</li>
              <li>Regra 2</li>
              <li>Regra 3</li>
            </ul>
          </Col>
        </Row>
        <Row className={CompetitionStyles.prizeSquares}>
          <Prize
            type="first"
            description="Pequena descrição do prémio Pequena descrição do prémio"
          />
          <Prize
            type="second"
            description="Pequena descrição do prémio Pequena descrição do prémio"
          />
          <Prize
            type="third"
            description="Pequena descrição do prémio Pequena descrição do prémio"
          />
        </Row>
      </Container>
    </div>
  </div>
)

export default Competition
