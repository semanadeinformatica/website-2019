import React from "react"
import { Container, Row, Col } from "reactstrap"

import Prize from "../competition/prize"
import Participate from "../utils/participate"

import CompetitionStyles from "../../styles/competition/competition.module.css"

const Competition = () => (
  <div>
    <Container>
      <Row>
        <Col
          xs="12"
          className={CompetitionStyles.competitionText + " my-4 py-5"}
        >
          Durante a SINF irás poder participar numa Competição de Programação!
          Esta iniciar-se-á no dia anterior à abertura do evento (27 de
          Outubro). Durante os seguintes 3 dias, irão ser lançados 2 exercícios
          por dia, de crescente dificuldade. A participação é voluntária e
          individual e aberta a todos os participantes da SINF, estando esta
          aberta a partir das XX:XX de 27 de Outubro até às XX:XX de dia 30 de
          Outubro. No mesmo dia, durante a Sessão de Encerramento, serão
          anunciados os vencedores, passando, assim, à respetiva entrega de
          prémios. A competição irá decorrer online, por via da plataforma
          HackerRank.
        </Col>
      </Row>
    </Container>

    <div className={CompetitionStyles.conditions + " pt-4"}>
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
              <li>
                Para participar na Competição, tens de te{" "}
                <a href="https://www.eventbrite.com/e/semana-de-informatica-2019-tickets-74550752307?fbclid=IwAR0bifoaq7PDdUMQieYaNue8lIaeCTR6lrtqzRg_JSKUD0gFGgsHSl096-M">
                  inscrever na SINF
                </a>
              </li>
              <li>
                A cópia de código é estritamente proibida, sendo esta
                monitorizada pela própria plataforma do HackerRank
              </li>
              <li>
                A pontuação em cada exercício será influenciada pela qualidade
                da solução, sendo o factor de desempate o tempo demorado a
                submeter a resolução
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
    <Container className={CompetitionStyles.whiteSection}>
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

    <Participate />
  </div>
)

export default Competition
