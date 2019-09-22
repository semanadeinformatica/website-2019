import React from "react"
import { Container, Col, Row } from "reactstrap"
import Contacts from "./contacts"
import Location from "./location"

import ContactStyles from "../../../styles/mainpage/contacts.module.css"

const ContactWrapper = () => {
  return (
    <Container id="contactos" className={ContactStyles.wrapper} fluid>
      <Row
        className={ContactStyles.container + " " + ContactStyles.main_container}
      >
        <Col className={ContactStyles.container}>
          <Row
            className={
              ContactStyles.container + " " + ContactStyles.info_container
            }
          >
            <Contacts />
          </Row>
        </Col>

        <Col className={ContactStyles.map_container}>
          <Row className={ContactStyles.map_container}>
            <Location />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactWrapper
