import React from "react"
import { Row, Col } from "reactstrap"
import TimePlace from "./time_place"

const Talk = ({ data, children }) => {
  return (
    <Row>
      <Col>
        <h1>{data.title}</h1>
        <Row>
          <Col>{data.day}</Col>
          <Col>
            {children}
            <TimePlace time={data.start_time} place={data.place} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Talk
