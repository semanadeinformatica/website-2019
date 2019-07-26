import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import SEO from "../components/seo"
import SoonStyles from "../styles/soon.module.css"
import Brevemente from "../components/brevemente"
import Info from "../components/info"
import { Container, Row, Col } from "reactstrap"

import Icon from "../images/svg/logo_sinf_comp.inline.svg"
import "../components/layout.css"

const IndexPage = () => (
  <div className={SoonStyles.background}>
    <SEO title="Coming Soon" />
    <Brevemente />

    <Container fluid className={SoonStyles.content_container}>
      <Row className={SoonStyles.top_row}>
        <Col>
          <Icon alt="Logo" className={SoonStyles.logo} />
        </Col>
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
