import React from "react"
import { Container, Row, Col } from "reactstrap"

// import competitionStyles from "../styles/competition/competition.module.css"

const Competition = () => (
  <Container>
    <Row>
      <Col xs="12" className="my-5 py-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vitae pulvinar orci, et placerat diam. Proin eu nulla lacus. Cras eu
        pellentesque nisl. Integer quis blandit dolor, a egestas lorem.
        Vestibulum sem nisl, cursus sed tristique nec, pulvinar lacinia risus.
        Suspendisse maximus mattis hendrerit. In eget lacinia eros. In tempor
        sollicitudin lobortis. Fusce interdum aliquam consectetur. Curabitur
        volutpat nisl ut tristique fermentum.
      </Col>
    </Row>

    <h4>Os prémios para os vencedores são:</h4>
    <ul>
      <li>
        1ª posição:{" "}
        <a href="https://www.sony.pt/electronics/auscultadores-banda-cabeca/wh-1000xm2">
          Headphones Bluetooth Sony WH-1000XM2
        </a>
      </li>
      <li>
        2ª posição:{" "}
        <a href="https://www.lg.com/pt/monitores/lg-24GM79G-B">
          Monitor LG 24GM79G-B 144Hz
        </a>
      </li>
      <li>
        3ª posição:{" "}
        <a href="https://www.raspberrypi.org/products/raspberry-pi-4-model-b/">
          Raspberry Pi 4 model B
        </a>
      </li>
    </ul>
  </Container>
)

export default Competition
