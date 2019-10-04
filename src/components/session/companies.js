import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"

import CompaniesStyles from "../../styles/session/companies.module.css"
import { useStaticQuery } from "gatsby"

// const getCompaniesArrayString = companies => {
//   let array = `[`
//   companies.forEach(company => {
//     array += `"` + company + `",`
//   });
//   array += `]`
//   return array
// }

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
    <Row className={CompaniesStyles.companiesContainer}>
      {companiesData.map(company => (
        <Col
          xs="12"
          sm="3"
          key={company.node.frontmatter.name}
          className={CompaniesStyles.companyLogo}
        >
          <Img fluid={company.node.frontmatter.img.childImageSharp.fluid} />
        </Col>
      ))}
    </Row>
  )
}

export default Companies
