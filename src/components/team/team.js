import React from "react"
import { Row, Col } from "reactstrap"
import Member from "./member"

import TeamStyles from "../../styles/team/team.module.css"

const Team = ({ name, members }) => {
  return (
    <Row>
      <Col className={TeamStyles.name_container}>
        <h2>{name}</h2>
      </Col>
      <Col>
        <Row className={TeamStyles.member_row}>
          {members.map((value, index) => (
            <Col key={"member" + index} className={TeamStyles.member_container}>
              <Member data={value} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default Team
