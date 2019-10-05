import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import CompaniesStyles from "../../styles/session/companies.module.css"
import { useStaticQuery } from "gatsby"

const Companies = ({ companies }) => {
  const data = useStaticQuery(graphql`
    query CompaniesQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sponsors/" } }) {
        edges {
          node {
            frontmatter {
              name
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const companiesData = data.allMarkdownRemark.edges.filter(element =>
    companies.includes(element.node.frontmatter.name)
  )

  return (
    <div className={CompaniesStyles.companiesContainer}>
      <Container>
        <Row className={CompaniesStyles.companiesRow}>
          {companiesData.map(company => (
            <Col
              xs="12"
              md="3"
              key={company.node.frontmatter.name}
              className={CompaniesStyles.companyLogo}
            >
              <Img fluid={company.node.frontmatter.img.childImageSharp.fluid} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Companies
