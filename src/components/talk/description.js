import React from "react"
import { Container, Row, Col } from "reactstrap"
import TimePlace from "./time_place"

import Styles from "../../styles/talk/description.module.css"

const Description = ({ data, children }) => {
  return (
    <Row className={Styles.row}>
      <Col>
        <Container className={Styles.container}>
          <h2 className={Styles.title}>{data.type + ": " + data.title}</h2>
          <Row className={Styles.info_container}>
            <Col className={Styles.date}>
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
