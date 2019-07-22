import React from "react"

import SEO from "../components/seo"
import SoonStyles from "../styles/soon.module.css"
import Brevemente from "../components/brevemente"
import Info from "../components/info"
import { Container, Row, Col } from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <div className={SoonStyles.background}>
    <SEO title="Coming Soon" />
    <Brevemente />

    <Container fluid className={SoonStyles.content_container}>
      <Row>
        <Col></Col>
      </Row>
      <Row className={SoonStyles.bottom_row}>
        <Col>
          <Info />
        </Col>
      </Row>
    </Container>
  </div>
)

export default IndexPage
