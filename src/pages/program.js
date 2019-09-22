import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import DailySchedule from "../components/dailySchedule"
import Event from "../components/event"

import { splitDays } from "../utils/programUtils"

export const eventsQuery = graphql`
  query Events {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/events/" } }
      sort: {
        fields: [
          frontmatter___day
          frontmatter___start_time
          frontmatter___type
        ]
      }
    ) {
      edges {
        node {
          frontmatter {
            day(formatString: "D MMMM", locale: "pt-PT")
            end_time
            place
            start_time
            title
            path
            type
            speakers {
              name
            }
          }
        }
      }
    }
  }
`

const ProgramPage = ({ data }) => (
  <Layout>
    <SEO title="Program" />
    <div>
      <h1>Program</h1>
      {splitDays(data).map(day => (
        <DailySchedule
          key={day[0].node.frontmatter.day}
          date={day[0].node.frontmatter.day}
          events={day.map(event => (
            <Event
              title={event.node.frontmatter.title}
              type={event.node.frontmatter.type}
              speakers={event.node.frontmatter.speakers}
              start_time={event.node.frontmatter.start_time}
              end_time={event.node.frontmatter.end_time}
              place={event.node.frontmatter.place}
              path={event.node.frontmatter.path}
            />
          ))}
          increment={10}
        />
      ))}
    </div>
  </Layout>
)

export default ProgramPage
