import React from "react"
import { Col } from "reactstrap"
import { Link } from "gatsby"

import Occupations from "./occupations"
import Overlay from "../utils/overlay"

import ParticipantsStyle from "../../styles/utils/participants-display.module.css"
import SpeakerStyle from "../../styles/speakers/single-speaker.module.css"

const SingleSpeaker = ({ speaker, color }) => (
  <Col
    className={ParticipantsStyle.member_container + " mb-3"}
    key={speaker.name}
  >
    <Overlay
      image={speaker.img.childImageSharp.fluid}
      color={color}
      linkedin={speaker.linkedin}
      twitter={speaker.twitter}
      github={speaker.github}
      website={speaker.website}
    />
    <div className="mt-2">
      <Link to={speaker.path} className={SpeakerStyle.name}>
        {speaker.name}
      </Link>
    </div>
    <Occupations occupations={speaker.occupations} />
  </Col>
)

export default SingleSpeaker
