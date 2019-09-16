import React from "react"
import Img from "gatsby-image"
import sponsorStyles from "../../../styles/single-sponsor.module.css"

const SingleSponsor = ({ sponsor, type }) => {
  let assignType
  if (type === "main") assignType = sponsorStyles.main
  else if (type === "gold") assignType = sponsorStyles.gold
  else if (type === "silver") assignType = sponsorStyles.silver
  else assignType = sponsorStyles.bronze

  return (
    <>
      <Img
        className={[sponsorStyles.image, assignType].join(" ")}
        fluid={sponsor.img.childImageSharp.fluid}
      />
    </>
  )
}

export default SingleSponsor
