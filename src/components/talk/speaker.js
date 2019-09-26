import React from "react"
import { Container, Col, Row } from "reactstrap"

import SpeakerFrame from "./speaker_frame"
import SpeakerName from "./speaker_name"

import Styles from "../../styles/talk/speaker.module.css"

const Speaker = ({ data }) => {
  return (
    <Container className={Styles.container} fluid>
      <div className={Styles.id_container}>
        <Row className={Styles.id_wrapper}>
          <Col className={Styles.frame}>
            <SpeakerFrame {...data} />
          </Col>
          <Col className={Styles.name}>
            <SpeakerName {...data} />
            <p className={Styles.bio}>{data.bio}</p>
          </Col>
        </Row>
      </div>

      <div className={Styles.mb_id_container}>
        <div className={Styles.mb_blue}>
          <SpeakerName {...data} />
          <SpeakerFrame {...data} />
        </div>
        <p className={Styles.bio}>{data.bio}</p>
      </div>
    </Container>
  )
}

export default Speaker
