import React from "react"
import { Col } from "reactstrap"

import CompetitionStyles from "../../styles/competition/competition.module.css"

const Prize = ({ type, description }) => {
  let prizeName
  if (type === "first") prizeName = "1º prémio"
  else if (type === "second") prizeName = "2º prémio"
  else prizeName = "3º prémio"

  return (
    <Col md="3" xs="12">
      <div className="pl-0">
        <img
          className={CompetitionStyles.squarePrize}
          src={require("../../images/competition/" + type + ".jpg")}
          width="280px"
          height="280px"
          alt="Prize"
        />
      </div>
      <div className={CompetitionStyles.prizeType}>{prizeName}</div>
      <div className={CompetitionStyles.prizeDescription}>{description}</div>
    </Col>
  )
}

export default Prize
