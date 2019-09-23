import React from "react"
import { graphql } from "gatsby"
import { Container } from "reactstrap"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import DefaultEvent from "../components/program/DefaultEvent"
import Talk from "../components/program/Talk"

import { splitDays } from "../utils/programUtils"
import programStyles from "../styles/program/program.module.css"

export const eventsQuery = graphql`
  query Events {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/events/" } }
      sort: { fields: [frontmatter___day, frontmatter___start_time] }
    ) {
      edges {
        node {
          fileAbsolutePath
          html
          frontmatter {
            day(formatString: "D MMMM", locale: "pt-PT")
            end_time
            place
            start_time
            title
            path
            icon
            speakers {
              name
              occupations {
                what
                where
              }
            }
          }
        }
      }
    }
  }
`

const ProgramPage = ({ data }) => {
  const days = splitDays(data)
  const day = days[0]
  return (
    <Layout>
      <SEO title="Program" />
      <Container>
        <h1>Program</h1>
        <div className={programStyles.schedule}>
          {day
            .filter(
              event =>
                event.node.fileAbsolutePath.includes("default") ||
                event.node.fileAbsolutePath.includes("talks")
            )
            .map(event =>
              event.node.fileAbsolutePath.includes("default") ? (
                <DefaultEvent
                  title={event.node.frontmatter.title}
                  start_time={event.node.frontmatter.start_time}
                  end_time={event.node.frontmatter.end_time}
                  place={event.node.frontmatter.place}
                  icon={event.node.frontmatter.icon}
                />
              ) : (
                <Talk
                  title={event.node.frontmatter.title}
                  start_time={event.node.frontmatter.start_time}
                  end_time={event.node.frontmatter.end_time}
                  place={event.node.frontmatter.place}
                  icon={event.node.frontmatter.icon}
                  path={event.node.frontmatter.path}
                  speakers={event.node.frontmatter.speakers}
                  description={event.node.html}
                />
              )
            )}
        </div>
      </Container>
    </Layout>
  )
}

export default ProgramPage
