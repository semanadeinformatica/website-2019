import React from "react"
import { Row, Col } from "reactstrap"

const Talk = ({ data, children }) => {
  console.log(data)

  return (
    <Row>
      <Col>
        <h1>{data.title}</h1>
        <div>
          {data.start_time} {" - "} {data.end_time}
        </div>
        <div>{data.place}</div>
        <Row>
          <Col>{data.day}</Col>
          <Col>{children}</Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Talk
