import React from "react"
import { Container, Row, Col } from "reactstrap"

// import competitionStyles from "../styles/competition/competition.module.css"

const Competition = () => (
  <Container>
    <Row>
      <Col>
        A semana de informática irá contar com uma Competição de Programação a
        realizar-se durante todos os dias evento. Serão lançados dois exercícios
        por dia nos primeiros três dias, de dificuldade crescente. A
        participação é individual, estará aberta a partir da sessão de abertura,
        dia 29 de Outubro (segunda-feira), até às 14h00 de 1 de Novembro
        (quinta-feira), e os vencedores serão anunciados na cerimónia de
        encerramento. A competição decorrá online no HackerRank, onde serão
        utilizados mecanismos anti-cópia para detetar infracções.
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
