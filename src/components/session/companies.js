import React from "react"
import { Row, Col } from "reactstrap"

const Companies = ({ companies }) => (
  <Row>
    {companies.map(company => (
      <Col key={company}>
        <h1>{company}</h1>
      </Col>
    ))}
  </Row>
)

export default Companies
