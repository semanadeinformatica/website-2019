import React from "react"
import { Container, Row, Col } from "reactstrap"

import Countdown from "./countdown"
import AboutStyles from "../../../styles/mainpage/about.module.css"

const About = () => (
  <div className={AboutStyles.aboutContainer + " pt-4"} id="sobre-nos">
    <Container>
      <Row className="pt-5 pb-4 mx-2 mx-sm-0">
        <Col xs="12" md="6">
          <h3 className={AboutStyles.title}>Semana de Informática</h3>
          <p>
            A Semana de Informática (SINF), organizada pelo Núcleo de
            Informática da Associação de Estudantes da Faculdade de Engenharia
            da Universidade do Porto (
            <a
              href="https://ni.fe.up.pt/"
              rel="noopener noreferrer"
              target="_blank"
            >
              NIAEFEUP
            </a>
            ), foi criada com o intuito de permitir aos estudantes,
            independentemente do curso, desenvolver as suas capacidades nas
            diversas áreas da Informática, promovendo a sua interação com o
            mundo empresarial através de eventos sociais.
          </p>
        </Col>
        <Col xs="12" md="6" className="mt-5 mt-md-0">
          <h3 className={AboutStyles.title}>SINF'2019</h3>
          <p>
            A SINF’2019 decorre entre os dias 28 e 30 de Outubro, na Faculdade
            de Engenharia da Universidade do Porto. Os participantes têm a seu
            dispor palestras, workshops e visitas a empresas, onde entrarão em
            contacto com diversas tecnologias e conceitos que não intervêm no
            percurso académico, focando-se portanto nas skills técnicas, assim
            como sessões de networking e pitch, fomentando o seu contacto com
            empresas de topo a nível nacional e internacional, podendo
            desenvolver as suas soft skills.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="11" sm="10" md="8" className={AboutStyles.countdownContainer}>
          <Countdown />
        </Col>
      </Row>
    </Container>
  </div>
)

export default About
