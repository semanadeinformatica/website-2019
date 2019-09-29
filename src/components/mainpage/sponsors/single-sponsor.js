import React from "react"
import Img from "gatsby-image"
import sponsorStyles from "../../../styles/mainpage/single-sponsor.module.css"

const SingleSponsor = ({ sponsor, type }) => {
  return (
    <div className={sponsorStyles.sponsorContainer}>
      <Img
        className={[sponsorStyles.image, sponsorStyles[type]].join(" ")}
        fluid={sponsor.img.childImageSharp.fluid}
      />
    </div>
  )
}

export default SingleSponsor
