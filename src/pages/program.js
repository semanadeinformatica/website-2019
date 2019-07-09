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
          date
          events {
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
          data.allEventsJson.edges.map(day =>(
            <DailySchedule
            key={day.node.date}
            date={day.node.date}
            events={day.node.events.map(event =>(
              <Event
              name={event.name} 
              type={event.type} 
              talker={event.talker} 
              startTime={event.startTime} 
              endTime={event.endTime} 
              location={event.location} />
            ))}/>
          ))
        )}
      />
    </div>
  </Layout>
)

export default ProgramPage
