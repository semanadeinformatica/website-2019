import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"

import AboutStyles from "../../../styles/mainpage/about.module.css"

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
    const today = new Date()
    const sinf = new Date(2019, 9, 28, 14, 30)
    const millisLeft = sinf - today

    if (millisLeft <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
      }
    }

    const timeLeft = {
      days: Math.floor(millisLeft / 86400000),
      hours:
        (Math.floor(millisLeft / 36e5) % 24) + today.getTimezoneOffset() / 60,
      minutes: Math.round(((millisLeft % 86400000) % 3600000) / 60000) % 60,
    }

    if (timeLeft.hours === -1) {
      timeLeft.hours = 23
      timeLeft.days--
    }

    return timeLeft
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
