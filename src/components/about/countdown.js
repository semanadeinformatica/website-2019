import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"

import AboutStyles from "../../styles/about.module.css"

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = this.getTimeLeft()
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.setState(this.getTimeLeft()), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  getTimeLeft() {
    let today = new Date()
    let sinf = new Date(2019, 10, 28, 14, 30)
    let timeLeft = sinf - today

    return {
      months:
        (sinf.getFullYear() - today.getFullYear()) * 12 -
        (today.getMonth() - sinf.getMonth()) -
        1,
      days: Math.floor(timeLeft / 86400000) % 30.5,
      hours:
        (Math.floor(timeLeft / 36e5) % 24) + today.getTimezoneOffset() / 60,
      minutes: Math.round(((timeLeft % 86400000) % 3600000) / 60000) % 60,
    }
  }

  render() {
    return (
      <Container className="py-4">
        <Row>
          <Col
            xs="4"
            lg={{ size: 2, offset: 2 }}
            className={AboutStyles.number}
          >
            {String(this.state.days).padStart(2, "0")}
          </Col>
          <Col xs="4" className={AboutStyles.number}>
            {String(this.state.hours).padStart(2, "0")}
          </Col>
          <Col xs="4" lg="2" className={AboutStyles.number}>
            {String(this.state.minutes).padStart(2, "0")}
          </Col>
        </Row>
        <Row>
          <Col
            xs="4"
            lg={{ size: 2, offset: 2 }}
            className={AboutStyles.timeType}
          >
            dias
          </Col>
          <Col xs="4" className={AboutStyles.timeType}>
            horas
          </Col>
          <Col xs="4" lg="2" className={AboutStyles.timeType}>
            minutos
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Countdown
