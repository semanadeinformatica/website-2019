import React from "react"
import { Row, Col } from "reactstrap"

import Speaker from "./speaker"

import TeamStyles from "../../styles/team/team.module.css" //refactor
import SpeakersStyles from "../../styles/speakers/speakers.module.css"

const getSpeakers = talks => {
  const speakers = []

  talks.forEach(({ node }) => {
    node.frontmatter.speakers.forEach(speaker => {
      speaker.path = node.frontmatter.path
      speakers.push(speaker)
    })
  })

  return speakers
}

const DailySpeakers = ({ talks, day }) => {
  const speakers = getSpeakers(talks)
  const date = new Date(talks[0].node.frontmatter.day)

  return (
    <Row className="mt-5">
      <Col md="2" xs="12" className={SpeakersStyles.dayDescription + " mt-5"}>
        <div>Day {day}</div>
        <div>{date.getDay() + " Outubro"}</div>
      </Col>
      <Col md="10" xs="12">
        <Row className={TeamStyles.member_row}>
          {speakers.map((speaker, index) =>
            index % 8 < 4 ? (
              <Speaker speaker={speaker} color={index % 4} />
            ) : (
              <Speaker speaker={speaker} color={3 - (index % 4)} />
            )
          )}
        </Row>
      </Col>
    </Row>
  )
}

export default DailySpeakers
