import React from "react"
import Img from "gatsby-image"
import sponsorsStyles from "../styles/sponsors.module.css"

const SingleSponsor = ({ sponsor, main }) => (
  <>
    <Img
      className={sponsorsStyles.sponsorImage}
      fluid={sponsor.img.childImageSharp.fluid}
    />
  </>
)

export default SingleSponsor
