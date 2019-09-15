import React from "react"
import { graphql } from "gatsby"

import { Container } from "reactstrap"

import SEO from "../components/seo"
import Team from "../components/team/team"
import PageBanner from "../components/utils/page_banner"

import TeamStyles from "../styles/team/team.module.css"
import Icon from "../images/svg/equipa.inline.svg"

const extractByTeam = data => {
  let members = {}
  data.allMarkdownRemark.edges.map(value => {
    const k = value.node.frontmatter.role
    if (members.hasOwnProperty(k)) {
      members[k].push(value.node.frontmatter)
    } else {
      members[k] = [value.node.frontmatter]
    }
    return value.node.frontmatter
  })
  return members
}

const TeamPage = ({ data }) => {
  const members = extractByTeam(data)

  return (
    <>
      <SEO title="Equipa" />
      <PageBanner>
        <Icon />
      </PageBanner>
      <Container className={TeamStyles.container} fluid>
        {Object.keys(members).map(key => {
          return <Team name={key} members={members[key]} key={key} />
        })}
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___role], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            role
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            linkedin
            github
          }
        }
      }
    }
  }
`

export default TeamPage
