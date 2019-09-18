import React from "react"
import Img from "gatsby-image"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import MemberStyles from "../../styles/team/member.module.css"

const colors = [
  MemberStyles.bg1,
  MemberStyles.bg2,
  MemberStyles.bg3,
  MemberStyles.bg4,
]

const Member = ({ data, color }) => {
  return (
    <div className={MemberStyles.container}>
      <Img
        fluid={data.img.childImageSharp.fluid}
        className={MemberStyles.image}
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
          {data.linkedin ? (
            <a href={data.linkedin} className={MemberStyles.link}>
              <FaLinkedin />
            </a>
          ) : (
            ""
          )}
          {data.github ? (
            <a href={data.github} className={MemberStyles.link}>
              <FaGithubSquare />
            </a>
          ) : (
            ""
          )}
        </div>
        <div>{data.name}</div>
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
  )
}

export default Member
