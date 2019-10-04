import React from "react"
import Img from "gatsby-image"
import { Row, Col } from "reactstrap"

import BannerStyles from "../../styles/session/banner.module.css"

const Banner = ({ image, title }) => (
  <Row>
    <Col xs="4">
      <div className={BannerStyles.logoContainer}>
        <Img fluid={image} />
      </div>
    </Col>
    <Col xs="8" className={BannerStyles.titleContainer}>
      <h1 className={BannerStyles.title}>
        {title}
        <hr className={BannerStyles.underline} />
      </h1>
    </Col>
  </Row>
)

export default Banner
