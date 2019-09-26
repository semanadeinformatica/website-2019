import React from "react"
import Img from "gatsby-image"

import { FaLinkedin, FaGithubSquare, FaGlobe } from "react-icons/fa"
import Styles from "../../styles/talk/speaker_frame.module.css"

const SpeakerFrame = ({ img, website, linkedin, github }) => {
  return (
    <div>
      <Img className={Styles.image} fluid={img.childImageSharp.fluid} />
      <div className={Styles.link_container}>
        {linkedin ? (
          <a href={linkedin} className={Styles.link}>
            <FaLinkedin />
          </a>
        ) : (
          ""
        )}
        {github ? (
          <a href={github} className={Styles.link}>
            <FaGithubSquare />
          </a>
        ) : (
          ""
        )}
        {website ? (
          <a href={website} className={Styles.link}>
            <FaGlobe />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default SpeakerFrame
