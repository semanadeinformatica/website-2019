import React from "react"
import { Row, Col } from "reactstrap"

import DescriptionStyles from "../../styles/session/description.module.css"

const Description = ({ day, place, start_time, end_time, description }) => (
  <Row>
    <Col
      xs={{ size: 8, offset: 4 }}
      className={DescriptionStyles.descriptionContainer}
    >
      <span className={DescriptionStyles.timePlace}>
        {day}, {start_time}-{end_time} {" • "} {place}
      </span>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className={DescriptionStyles.description}
      ></div>
    </Col>
  </Row>
)

export default Description
