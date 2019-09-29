import React from "react"
import { Container, Col, Row } from "reactstrap"

import SpeakerFrame from "./speaker_frame"
import SpeakerName from "./speaker_name"

import SpeakerStyles from "../../styles/talk/speaker.module.css"

const Speaker = ({ data }) => {
  return (
    <Container className={SpeakerStyles.container} fluid>
      <div className={SpeakerStyles.id_container}>
        <Row className={SpeakerStyles.id_wrapper}>
          <Col className={SpeakerStyles.frame}>
            <SpeakerFrame {...data} />
          </Col>
          <Col className={SpeakerStyles.name}>
            <SpeakerName {...data} />
            <p className={SpeakerStyles.bio}>{data.bio}</p>
          </Col>
        </Row>
      </div>

      <div className={SpeakerStyles.mb_id_container}>
        <div className={SpeakerStyles.mb_blue}>
          <SpeakerName {...data} />
          <SpeakerFrame {...data} />
        </div>
        <p className={SpeakerStyles.bio}>{data.bio}</p>
      </div>
    </Container>
  )
}

export default Speaker
