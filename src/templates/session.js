import React from "react"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"

export default function Template({ data }) {
  const { markdownRemark: session } = data

  return (
    <Layout>
      <SEO title={session.frontmatter.title} />
      <Container>
        <Row>
          <Col xs="4">
            <Img fluid={session.frontmatter.img.childImageSharp.fluid} />
          </Col>
          <Col xs="8">
            <h1>{session.frontmatter.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 8, offset: 4 }}>
            <div>
              {session.frontmatter.day} - {session.frontmatter.place} - [
              {session.frontmatter.start_time} - {session.frontmatter.end_time}]
            </div>
            <div dangerouslySetInnerHTML={{ __html: session.html }}></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Empresas</h1>
          </Col>
        </Row>
        <Row>
          <h1>Não percas mais tempo!</h1>
          <a
            type="button"
            href={session.frontmatter.registration}
            target="_blank"
            rel="noopener noreferrer"
          >
            Participar
          </a>
        </Row>
      </Container>
    </Layout>
  )
}

export const sessionQuery = graphql`
  query getSession($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        title
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        day(formatString: "D MMMM", locale: "pt-PT")
        place
        start_time
        end_time
        registration
      }
    }
  }
`
