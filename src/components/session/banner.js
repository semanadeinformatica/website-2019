import React from "react"
import { Container, Row, Col } from "reactstrap"

import BannerStyles from "../../styles/session/banner.module.css"

const Banner = ({ title }) => (
  <div className={BannerStyles.bannerContainer}>
    <Container>
      <Row>
        <Col
          xs="12"
          md={{ size: 8, offset: 4 }}
          className={BannerStyles.titleContainer}
        >
          <h1 className={BannerStyles.title}>
            {title}
            <hr className={BannerStyles.underline} />
          </h1>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Banner
