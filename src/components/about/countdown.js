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
    let sinf = new Date(2019, 11, 28, 14, 30)
    let timeLeft = sinf - today

    return {
      months:
        (sinf.getFullYear() - today.getFullYear()) * 12 -
        (today.getMonth() - sinf.getMonth()) -
        1 -
        Math.sign(sinf.getDay() - today.getDay()),
      days: Math.floor(timeLeft / 86400000) % 31,
      hours: Math.floor((timeLeft % 86400000) / 3600000) % 24,
      minutes: Math.round(((timeLeft % 86400000) % 3600000) / 60000) % 60,
    }
  }

  render() {
    return (
      <Container className="py-3">
        <Row>
          <Col xs={{ size: 2, offset: 2 }} className={AboutStyles.number}>
            {this.state.months}
          </Col>
          <Col xs="2" className={AboutStyles.number}>
            {this.state.days}
          </Col>
          <Col xs="2" className={AboutStyles.number}>
            {this.state.hours}
          </Col>
          <Col xs="2" className={AboutStyles.number}>
            {this.state.minutes}
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 2, offset: 2 }} className="text-center">
            meses
          </Col>
          <Col xs="2" className={AboutStyles.timeType}>
            dias
          </Col>
          <Col xs="2" className={AboutStyles.timeType}>
            horas
          </Col>
          <Col xs="2" className={AboutStyles.timeType}>
            minutos
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Countdown
