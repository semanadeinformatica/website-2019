import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DailySchedule from "../components/dailySchedule"

import Event from "../components/event"

const eventsQuery = graphql`
  query EventsJSON {
    allEventsJson {
      edges {
        node {
          name
          type
          talker
          startTime
          endTime
          location
        }
      }
    }
  }
`

const ProgramPage = data => (
  <Layout>
    <SEO title="Program" />
    <div>
      <h1>Program</h1>
      <StaticQuery
        query={eventsQuery}
        render={data => (
          <DailySchedule
            events={data.allEventsJson.edges.map(event => (
              <Event 
              name={event.node.name} 
              type={event.node.type} 
              talker={event.node.talker} 
              startTime={event.node.startTime} 
              endTime={event.node.endTime} 
              location={event.node.location} 
              />
            ))}
          />
        )}
      />
    </div>
  </Layout>
)

export default ProgramPage
