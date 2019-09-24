import React from "react"
import { Col } from "reactstrap"
import { Link } from "gatsby"
import { FaLinkedin, FaGithubSquare, FaGlobe } from "react-icons/fa"
import Img from "gatsby-image"

import Occupations from "../utils/occupations"

import MemberStyles from "../../styles/team/member.module.css" //refactor
import TeamStyles from "../../styles/team/team.module.css" //refactor

//refactor
const colors = [
  MemberStyles.bg1,
  MemberStyles.bg2,
  MemberStyles.bg3,
  MemberStyles.bg4,
]

const Speaker = ({ speaker, color }) => (
  <Col
    className={TeamStyles.member_container + " mt-5"}
    key={speaker.name}
    md="3"
    sm="6"
    xs="12"
  >
    <div className={MemberStyles.container}>
      <Img
        fluid={speaker.img.childImageSharp.fluid}
        style={MemberStyles.image}
      />
      <div
        className={
          MemberStyles.info_overlay +
          " " +
          MemberStyles.overlay +
          " " +
          colors[color]
        }
      >
        <div className={MemberStyles.links}>
          {speaker.linkedin ? (
            <a href={speaker.linkedin} className={MemberStyles.link}>
              <FaLinkedin />
            </a>
          ) : (
            ""
          )}
          {speaker.github ? (
            <a href={speaker.github} className={MemberStyles.link}>
              <FaGithubSquare />
            </a>
          ) : (
            ""
          )}
          {speaker.website ? (
            <a href={speaker.website} className={MemberStyles.link}>
              <FaGlobe />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>

      <div
        className={
          MemberStyles.color_overlay +
          " " +
          MemberStyles.overlay +
          " " +
          colors[color]
        }
      ></div>
    </div>
    <div>
      <Link to={speaker.path}>{speaker.name}</Link>
    </div>
    <Occupations occupations={speaker.occupations} />
  </Col>
)

export default Speaker
