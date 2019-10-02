import React from "react"
import { Container, Row, Col } from "reactstrap"

import CompetitionStyles from "../styles/competition/competition.module.css"

const Prize = ({ type, description }) => {
  const prizeImage = <Img src={"todo" + type}></Img>

  return (
    <Col xs="3" className={CompetitionStyles.squarePrize}>
      {prizeImage}
      {description}
    </Col>
  )
}

export default Prize
