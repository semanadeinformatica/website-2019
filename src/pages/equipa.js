import React from "react"
import { graphql } from "gatsby"

import { Container } from "reactstrap"

import SEO from "../components/common/seo"
import Layout from "../components/common/layout"

import Team from "../components/team/team"
import PageBanner from "../components/utils/page_banner"

import TeamStyles from "../styles/team/team.module.css"
import Icon from "../images/svg/equipa.inline.svg"

const determine_first = (teams, n_per_row) => {
  const odd_row = [true]
  let rows = 0
  for (const team of teams) {
    const element = team.members
    rows += Math.ceil(element.length / n_per_row)

    if (rows % 2 === 0) {
      odd_row.push(true)
    } else {
      odd_row.push(false)
    }
  }

  return odd_row
}

const TeamPage = ({ data }) => {
  const teams = data.allTeamJson.nodes
  const n_per_row = 4
  const is_starting_row_odd = determine_first(teams, n_per_row)

  return (
    <Layout>
      <SEO title="Equipa" />
      <PageBanner>
        <Icon />
      </PageBanner>
      <Container className={TeamStyles.container}>
        {teams.map((team, index) => {
          return (
            <Team
              name={team.name}
              members={team.members}
              key={index}
              n_per_row={n_per_row}
              start_odd={is_starting_row_odd[index]}
            />
          )
        })}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allTeamJson {
      nodes {
        name
        members {
          github
          linkedin
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
`

export default TeamPage
