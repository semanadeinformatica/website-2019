import React from "react"
import { Row, Col } from "reactstrap"
import Member from "./member"

import TeamStyles from "../../styles/team/team.module.css"

const Team = ({ name, members }) => {
  return (
    <Row>
      <Col className={TeamStyles.team_container}>{name}</Col>
      <Col>
        <Row>
          {members.map(value => (
            <Col key={value.name} className={TeamStyles.member_container}>
              <Member data={value} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default Team
