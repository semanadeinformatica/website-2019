import React from "react"
import Img from "gatsby-image"
import { Container, Col, Row } from "reactstrap"

const Partnership = ({ partnership }) => (
  <Container>
    <Row>
      <Col>
        <Img fluid={partnership.img.childImageSharp.fluid} />
      </Col>
      <Col>
        <div>{partnership.name}</div>
        <div>
          {partnership.facebook +
            " " +
            partnership.instagram +
            " " +
            partnership.website}
        </div>
        <div>{partnership.description}</div>
      </Col>
    </Row>
  </Container>
)

export default Partnership
