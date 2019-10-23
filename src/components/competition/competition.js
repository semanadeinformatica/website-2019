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
          Participa na nossa Competição de Programação e habilita-te a ganhar 3 
          fantásticos prémios! Fica atento aos 6 desafios, de crescente dificuldade, 
          que vamos lançar para seres o mais rápido. No entanto, a rapidez não é tudo 
          pelo que tens de ser também o melhor a resolver os desafios. 

          <br /><br />

          Não percas a Sessão de Encerramento, onde serão anunciados os vencedores e 
          será feita a entrega de prémios.

          <br /><br />

          A participação é voluntária e individual e aberta a todos os participantes da Semana de Informática.
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
                A Competição terá início dia 27 de Outubro às 15h00, decorrendo durante os 3 próximos 
                dias até dia 30 de Outubro às 17:00.
              </li>
              <li>
                A competição decorrerrá online, através da plataforma HackerRank.
              </li>
              <li>
                Serão lançados diariamente 2 novos desafios: dia 27, às 15h00 e dias 28 e 29, às 21h00.
              </li>
              <li>
                Apenas estarás habilitado aos prémios caso tenhas tenhas realizado <strong>inscrição </strong> 
                e <strong>check-in</strong> na SINF.
              </li>
              <li>
                A entrega de prémios será realizada durante a Sessão de Encerramento.
              </li>
              <li>
                A cópia de código é estritamente proibida, sendo esta monitorizada pela própria plataforma 
                HackerRank.
              </li>
              <li>
                A pontuação em cada exercício será influenciada pela qualidade da solução, sendo o factor 
                de desempate o tempo demorado a submeter a resolução.
              </li>
              <li>
                Caso sejas um dos vencedores, certifica-te que estás presente na Sessão de Encerramento ou 
                indica-nos o contacto de alguém que possa receber o prémio por ti.
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
          title="Trotinete elétrica"
          description="STOREX RIDE 80XL PRETA"
        />
        <Prize
          type="second"
          title="Headphones Bluetooth"
          description="JBL Live 650BTNC"
        />
        <Prize
          type="third"
          title="Cartão oferta Fnac 100€"
          description=""
        />
      </Row>
    </Container>

    <Participate link="https://www.hackerrank.com/sinf-2019" />
  </div>
)

export default Competition
