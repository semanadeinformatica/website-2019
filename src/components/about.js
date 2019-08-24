import React from "react"
import { Container, Row, Col } from "reactstrap"

import AboutStyles from "../../styles/about.module.css"

const About = () => (
  <div>
    <Container>
      <Row>
        <Col xs="6">
          <h3>Semana de Informática</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet
          </p>
        </Col>
        <Col xs="6">
          <h3>SINF'2019</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper minim veniam, quis nostrud exerci tation ullamcorper
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="6">
          <Container>
            <Row>
              <Col xs="4" className="text-center">
                04
              </Col>
              <Col xs="4" className="text-center">
                04
              </Col>
              <Col xs="4" className="text-center">
                04
              </Col>
            </Row>
            <Row>
              <Col xs="4" className="text-center">
                meses
              </Col>
              <Col xs="4" className="text-center">
                dias
              </Col>
              <Col xs="4" className="text-center">
                horas
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
)

export default About
