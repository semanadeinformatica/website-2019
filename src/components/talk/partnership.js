import React from "react"
import Img from "gatsby-image"
import { Container, Col, Row } from "reactstrap"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

import WebIcon from "../../images/svg/web_icon.inline.svg"

import FrameStyles from "../../styles/talk/frame.module.css"
import PartnershipStyles from "../../styles/talk/partnership.module.css"

const Partnership = ({ partnership }) => (
  <Container className={PartnershipStyles.container}>
    <Row>
      <Col xs="12" className={PartnershipStyles.titleContainer}>
        <h1>
          Parceria
          <hr className={PartnershipStyles.underline} />
        </h1>
      </Col>
    </Row>
    <Row>
      <Col xs="12" lg="5" xl="4" className={PartnershipStyles.imageContainer}>
        <div
          className={FrameStyles.image + " " + PartnershipStyles.partnerImage}
        >
          <Img fluid={partnership.img.childImageSharp.fluid} />
        </div>
      </Col>
      <Col className={PartnershipStyles.infoContainer}>
        <h2 className={PartnershipStyles.name}>{partnership.name}</h2>
        <div className={PartnershipStyles.socials}>
          {partnership.facebook ? (
            <a href={partnership.facebook} className={FrameStyles.link}>
              <FaFacebookSquare />
            </a>
          ) : (
            ""
          )}{" "}
          {partnership.instagram ? (
            <a href={partnership.instagram} className={FrameStyles.link}>
              <FaInstagram />
            </a>
          ) : (
            ""
          )}{" "}
          {partnership.website ? (
            <a href={partnership.website} className={FrameStyles.link}>
              <WebIcon />
            </a>
          ) : (
            ""
          )}
        </div>
        <div className={PartnershipStyles.description}>
          {partnership.description}
        </div>
      </Col>
    </Row>
  </Container>
)

export default Partnership
