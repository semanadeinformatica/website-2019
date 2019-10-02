import React from "react"
import Img from "gatsby-image"
import { Row, Col } from "reactstrap"

const Banner = ({ image, title }) => (
  <Row>
    <Col xs="4">
      <div>
        <Img fluid={image} />
      </div>
    </Col>
    <Col xs="8">
      <h1>{title}</h1>
    </Col>
  </Row>
)

export default Banner
