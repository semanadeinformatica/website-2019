import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DailySchedule from "../components/dailySchedule"

import Event from "../components/event"

const eventsQuery = graphql`
  query Events {
    allMarkdownRemark(
      sort: { fields: [frontmatter___day, frontmatter___start_time] }
      filter: { fileAbsolutePath: {} }
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
            speakers {
              name
            }
          }
        }
      }
    }
  }
`

const ProgramPage = () => (
  <Layout>
    <SEO title="Program" />
    <div>
      <h1>Program</h1>
      <StaticQuery
        query={eventsQuery}
        render={data => {
          let days = []
          let day = []
          for (let i = 0; i < data.allMarkdownRemark.edges.length; i++) {
            let event = data.allMarkdownRemark.edges[i]
            if (
              i > 0 &&
              event.node.frontmatter.day !== data.allMarkdownRemark.edges[i - 1].node.frontmatter.day
            ) {
              days.push(day)
              day = []
            }
            day.push(event)
          }
          days.push(day);

          console.log(days)
          return days.map(day => (
            <DailySchedule
              key={day[0].node.frontmatter.day}
              date={day[0].node.frontmatter.day}
              events={day.map(event => (
                <Event
                  title={event.node.frontmatter.title}
                  speakers={event.node.frontmatter.speakers}
                  start_time={event.node.frontmatter.start_time}
                  end_time={event.node.frontmatter.end_time}
                  place={event.node.frontmatter.place}
                  path={event.node.frontmatter.path}
                />
              ))}
            />
          ))
        }}
      />
    </div>
  </Layout>
)

export default ProgramPage
