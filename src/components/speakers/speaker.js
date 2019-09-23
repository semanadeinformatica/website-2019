import React from "react"
import { Col } from "reactstrap"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Occupations from "../utils/occupations"

const styles = {
  image: {
    width: "100px",
    height: "100px",
  },
}

const Speaker = ({ speaker }) => (
  <Col className="mt-5" key={speaker.name} md="3" sm="6" xs="12">
    <Img fluid={speaker.img.childImageSharp.fluid} style={styles.image} />
    <div>
      <Link to={speaker.path}>{speaker.name}</Link>
    </div>
    <Occupations occupations={speaker.occupations} />
  </Col>
)

export default Speaker
