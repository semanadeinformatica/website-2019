import React from "react"
import { Row, Col } from "reactstrap"
import Member from "./member"

import TeamStyles from "../../styles/team/team.module.css"

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
    <Row>
      <Col className={TeamStyles.name_container}>
        <h2>{name}</h2>
      </Col>
      <Col>
        {member_rows.map((row_members, row_index) => {
          odd ^= true
          console.log(row_members, odd)

          return (
            <Row className={TeamStyles.member_row} key={"row" + row_index}>
              {row_members.map((value, index) => (
                <Col
                  key={"member" + index}
                  className={TeamStyles.member_container}
                >
                  <Member
                    data={value}
                    color={!odd ? index : row_members.length - index}
                  />
                </Col>
              ))}
            </Row>
          )
        })}
      </Col>
    </Row>
  )
}

export default Team
