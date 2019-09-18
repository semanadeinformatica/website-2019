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

const determine_first = (members, n_per_row) => {
  const odd_row = [true]
  for (const team_name in members) {
    if (members.hasOwnProperty(team_name)) {
      const element = members[team_name]
      const rows = Math.ceil(element.length / n_per_row)
      if (rows % 2 === 0) {
        odd_row.push(true)
      } else {
        odd_row.push(false)
      }
    }
  }

  return odd_row
}

const TeamPage = ({ data }) => {
  const members = extractByTeam(data)
  const n_per_row = 4
  const is_starting_row_odd = determine_first(members, n_per_row)

  return (
    <>
      <SEO title="Equipa" />
      <PageBanner>
        <Icon />
      </PageBanner>
      <Container className={TeamStyles.container}>
        {Object.keys(members).map((key, index) => {
          return (
            <Team
              name={key}
              members={members[key]}
              key={key}
              n_per_row={n_per_row}
              start_odd={is_starting_row_odd[index]}
            />
          )
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
