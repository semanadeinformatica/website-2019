import React from "react"
import Img from "gatsby-image"
import sponsorsStyles from "../styles/sponsors.module.css"

const SingleSponsor = ({ sponsor }) => (
  <>
    <Img
      className={sponsorsStyles.sponsorImage}
      fluid={sponsor.img.childImageSharp.fluid}
    />
    <div>{sponsor.name}</div>
  </>
)

export default SingleSponsor
