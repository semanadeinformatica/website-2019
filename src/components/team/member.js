import React from "react"
import Img from "gatsby-image"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import MemberStyles from "../../styles/team/member.module.css"

const Member = ({ data }) => {
  return (
    <div className={MemberStyles.container}>
      <Img
        fluid={data.img.childImageSharp.fluid}
        className={MemberStyles.image}
      />
      <div className={MemberStyles.info_overlay + " " + MemberStyles.overlay}>
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
        className={MemberStyles.color_overlay + " " + MemberStyles.overlay}
      ></div>
    </div>
  )
}

export default Member
