import React from "react"
import Img from "gatsby-image"

import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import Globe from "../../images/svg/web_icon.inline.svg"

import FrameStyles from "../../styles/talk/frame.module.css"

const SpeakerFrame = ({ img, website, linkedin, github, twitter }) => {
  return (
    <div>
      <Img className={FrameStyles.image} fluid={img.childImageSharp.fluid} />
      <div className={FrameStyles.link_container}>
        {twitter ? (
          <a href={twitter} className={FrameStyles.link}>
            <FaTwitterSquare />
          </a>
        ) : (
          ""
        )}{" "}
        {linkedin ? (
          <a href={linkedin} className={FrameStyles.link}>
            <FaLinkedin />
          </a>
        ) : (
          ""
        )}
        {github ? (
          <a href={github} className={FrameStyles.link}>
            <FaGithubSquare />
          </a>
        ) : (
          ""
        )}
        {website ? (
          <a href={website} className={FrameStyles.link}>
            <Globe />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default SpeakerFrame
