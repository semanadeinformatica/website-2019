import React from "react"
import { Row, Col } from "reactstrap"

const Description = ({ day, place, start_time, end_time, description }) => (
  <Row>
    <Col xs={{ size: 8, offset: 4 }}>
      <div>
        {day}, {start_time}-{end_time} {" • "} {place}
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </Col>
  </Row>
)

export default Description
