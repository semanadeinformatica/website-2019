import React from "react"
import { Col } from "reactstrap"

import CompetitionStyles from "../../styles/competition/competition.module.css"

const Prize = ({ type, description }) => {
  return (
    <Col xs="3">
      <div className={CompetitionStyles.squarePrize + " pl-0"}></div>
      <div className={CompetitionStyles.prizeType}>{type}</div>
      <div className={CompetitionStyles.prizeDescription}>{description}</div>
    </Col>
  )
}

export default Prize
