import React from "react"
import { Col, Row } from "reactstrap"
import Contacts from "./contacts"
import Location from "./location"

import ContactStyles from "../../styles/contacts.module.css"

const ContactWrapper = () => {
  return (
    <Col>
      <Row>
        <Col>
          <Row>
            <Contacts />
          </Row>
        </Col>

        <Col>
          <Row className={ContactStyles.map_container}>
            <Location />
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default ContactWrapper
