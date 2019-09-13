import React from "react"
import Img from "gatsby-image"
import sponsorStyles from "../styles/sponsor.module.css"

const SingleSponsor = ({ sponsor, main }) => (
  <>
    <Img
      className={sponsorStyles.image}
      fluid={sponsor.img.childImageSharp.fluid}
    />
  </>
)

export default SingleSponsor
