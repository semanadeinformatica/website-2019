import React from "react"
import { Row, Col } from "reactstrap"
import Member from "./member"

import TeamStyles from "../../styles/team/team.module.css"
import ParticipantsStyle from "../../styles/utils/participants-display.module.css"

const divide_rows = (members, n_per_row) => {
  const member_rows = []
  let tmp = []
  for (let i = 0; i < members.length; i++) {
    const element = members[i]
    if (i % n_per_row === 0 && tmp.length !== 0) {
      member_rows.push(tmp)
      tmp = []
    }

    tmp.push(element)
  }
  if (tmp.length !== 0) member_rows.push(tmp)
  return member_rows
}

const Team = ({ name, members, n_per_row, start_odd }) => {
  const member_rows = divide_rows(members, n_per_row)
  let odd = start_odd

  return (
    <Row className={TeamStyles.team_container}>
      <Col className={TeamStyles.name_container}>
        <h2>{name}</h2>
      </Col>
      <Col className={TeamStyles.members_container}>
        {member_rows.map((row_members, row_index) => {
          odd ^= true

          return (
            <Row
              className={ParticipantsStyle.member_row}
              key={"row" + row_index}
            >
              {row_members.map((value, index) => {
                const color = !odd ? n_per_row - index - 1 : index
                return (
                  <Col
                    key={"member" + index}
                    className={ParticipantsStyle.member_container}
                  >
                    <Member data={value} color={color} />
                  </Col>
                )
              })}
            </Row>
          )
        })}
      </Col>
    </Row>
  )
}

export default Team
