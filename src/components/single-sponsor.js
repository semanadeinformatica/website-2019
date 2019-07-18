import React from "react"
import Img from "gatsby-image"

const styles = {
  image: {
    width: "100px",
    height: "100px",
  },
}

const SingleSponsor = ({ sponsor }) => (
  <div>
    <Img fluid={sponsor.img.childImageSharp.fluid} style={styles.image} />
    <div>{sponsor.name}</div>
  </div>
)

export default SingleSponsor
