import React from "react"
import { Container, Row, Col } from "reactstrap"
import TimePlace from "./time_place"

import DescriptionStyles from "../../styles/talk/description.module.css"

const calculateDay = date => {
  const oneDay = 24 * 60 * 60 * 1000
  let first_day = new Date(2019, 10, 28)
  let day = new Date(2019, 10, date.replace(/(^\d+)(.+$)/i, "$1"))
  return Math.round(Math.abs((day - first_day.getTime()) / oneDay)) + 1
}

const Description = ({ data, children }) => {
  return (
    <Row className={DescriptionStyles.row}>
      <Col>
        <Container className={DescriptionStyles.container}>
          <h2 className={DescriptionStyles.title}>
            {data.type + ": " + data.title}
          </h2>
          <Row className={DescriptionStyles.info_container}>
            <Col className={DescriptionStyles.date}>
              <div>Dia {calculateDay(data.day)}</div>
              <div>{data.day}</div>
            </Col>
            <Col>
              {children}
              <TimePlace time={data.start_time} place={data.place} />
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  )
}

export default Description
