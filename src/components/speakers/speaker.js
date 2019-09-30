import React from "react"
import { Col } from "reactstrap"
import { Link } from "gatsby"

import Occupations from "../utils/occupations"
import Overlay from "../utils/overlay"

import TeamStyles from "../../styles/team/team.module.css" //refactor

const Speaker = ({ speaker, color }) => (
  <Col className={TeamStyles.member_container + " mb-3"} key={speaker.name}>
    <Overlay
      image={speaker.img.childImageSharp.fluid}
      color={color}
      linkedin={speaker.linkedin}
      twitter={speaker.twitter}
      github={speaker.github}
      website={speaker.website}
    />
    <div>
      <Link to={speaker.path}>{speaker.name}</Link>
    </div>
    <Occupations occupations={speaker.occupations} />
  </Col>
)

export default Speaker
