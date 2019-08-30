import React from "react"
import { Container, Row, Col } from "reactstrap"

import Countdown from "./countdown"
import AboutStyles from "../../styles/about.module.css"

const About = () => (
  <div className={AboutStyles.aboutContainer}>
    <Container>
      <Row className="pt-5 pb-4">
        <Col xs="12" md="6">
          <h3 className={AboutStyles.title}>Semana de Informática</h3>
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
        <Col xs="12" md="6" className="mt-5 mt-md-0">
          <h3 className={AboutStyles.title}>SINF'2019</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper minim veniam, quis nostrud exerci tation ullamcorper
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
