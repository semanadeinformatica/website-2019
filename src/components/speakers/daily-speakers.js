import React from "react"
import { Row, Col } from "reactstrap"

import SingleSpeaker from "./single-speaker"

import ParticipantsStyle from "../../styles/utils/participants-display.module.css"
import SpeakersStyles from "../../styles/speakers/speakers.module.css"

const getSpeakers = talks => {
  const speakers = []

  talks
    .filter( ({ node }) => node.frontmatter.type !== "Placeholder" )
    .forEach(({ node }) => {
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
        lg={{ size: "3", offset: "1" }}
        md={{ size: "3", offset: "0" }}
        sm="4"
        xs="12"
        className={SpeakersStyles.dayDescription + " mb-3"}
      >
        <div className={SpeakersStyles.dayNumber}>Dia {day}</div>
        <div className={SpeakersStyles.date}>{date.getDate() + " Outubro"}</div>
      </Col>
      <Col xl="10" lg="6" md="8" sm="8" xs="12">
        <Row className={ParticipantsStyle.member_row}>
          {speakers.map((speaker, index) =>
            index % 8 < 4 ? (
              <SingleSpeaker key={index} speaker={speaker} color={index % 4} />
            ) : (
              <SingleSpeaker key={index} speaker={speaker} color={3 - (index % 4)} />
            )
          )}
        </Row>
      </Col>
    </Row>
  )
}

export default DailySpeakers
