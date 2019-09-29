import React from "react"
import { Container, Row, Col } from "reactstrap"
import TimePlace from "./time_place"

import DescriptionStyles from "../../styles/talk/description.module.css"

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
              <div>Dia {data.n_day}</div>
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
