import React from "react"
import Img from "gatsby-image"
import { FaLinkedin, FaTwitter, FaGithubSquare, FaGlobe } from "react-icons/fa"

import OverlayStyles from "../../styles/utils/overlay.module.css"

const colors = [
  OverlayStyles.bg1,
  OverlayStyles.bg2,
  OverlayStyles.bg3,
  OverlayStyles.bg4,
]

const Overlay = ({
  image,
  color,
  linkedin,
  twitter,
  github,
  website,
  children,
}) => (
  <div className={OverlayStyles.container}>
    <Img fluid={image} className={OverlayStyles.image} />
    <div
      className={
        OverlayStyles.info_overlay +
        " " +
        OverlayStyles.overlay +
        " " +
        colors[color]
      }
    >
      <div className={OverlayStyles.links}>
        {linkedin ? (
          <a href={linkedin} className={OverlayStyles.link}>
            <FaLinkedin />
          </a>
        ) : (
          ""
        )}
        {twitter ? (
          <a href={twitter} className={OverlayStyles.link}>
            <FaTwitter />
          </a>
        ) : (
          ""
        )}
        {github ? (
          <a href={github} className={OverlayStyles.link}>
            <FaGithubSquare />
          </a>
        ) : (
          ""
        )}
        {website ? (
          <a href={website} className={OverlayStyles.link}>
            <FaGlobe />
          </a>
        ) : (
          ""
        )}
      </div>
      {children}
    </div>

    <div
      className={
        OverlayStyles.color_overlay +
        " " +
        OverlayStyles.overlay +
        " " +
        colors[color]
      }
    ></div>
  </div>
)

export default Overlay
