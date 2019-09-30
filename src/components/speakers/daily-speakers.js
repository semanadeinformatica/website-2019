import React from "react"
import { Row, Col } from "reactstrap"

import Speaker from "./speaker"

import ParticipantsStyle from "../../styles/utils/participants-display.module.css"
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
      <Col
        xl={{ size: "2", offset: "0" }}
        lg={{ size: "2", offset: "2" }}
        md={{ size: "2", offset: "1" }}
        sm="4"
        xs="12"
        className={SpeakersStyles.dayDescription}
      >
        <div>Day {day}</div>
        <div>{date.getDay() + " Outubro"}</div>
      </Col>
      <Col xl="10" lg="6" md="8" sm="8" xs="12">
        <Row className={ParticipantsStyle.member_row}>
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
