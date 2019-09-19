import React from "react"
import Img from "gatsby-image"
import sponsorStyles from "../../../styles/single-sponsor.module.css"

const SingleSponsor = ({ sponsor, type }) => {
  return (
    <>
      <Img
        className={[sponsorStyles.image, sponsorStyles[type]].join(" ")}
        fluid={sponsor.img.childImageSharp.fluid}
      />
    </>
  )
}

export default SingleSponsor
