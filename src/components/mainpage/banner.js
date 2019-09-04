import React from "react"
import { Container, Col, Row } from "reactstrap"

import BasicInfo from "./basic-info"

import BannerStyles from "../../styles/banner.module.css"
import Icon from "../../images/svg/logo_sinf_comp.inline.svg"

const Banner = () => {
  return (
    <div className={BannerStyles.banner}>
      <Container className={BannerStyles.banner_info_container} fluid>
        <Row>
          <Col className={BannerStyles.banner_info}>
            <Icon className={BannerStyles.icon} />
            <div className={BannerStyles.basic_info}>
              <BasicInfo />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
