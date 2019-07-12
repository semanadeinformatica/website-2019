import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DailySchedule from "../components/dailySchedule"

import Event from "../components/event"

const eventsQuery = graphql`
  query Events {
    allMarkdownRemark(
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

const dayOneDefaultEvents = [
  <Event title="Check-in" start_time="11h00" end_time="17h00" />,
  <Event title="Cerimónia de abertura" start_time="14h00" end_time="15h00" place="B032"/>,
  <Event title="Inicio da competição de programação" start_time="14h00" />
]

const dayFourDefaultEvents = [
  <Event title="Cerimónia de encerramento" start_time="17h50" end_time="18h20" place="B032"/>,
  <Event title="Porto de honra" start_time="18h20" end_time="18h50" place="local a anunciar"/>

]

function getEvents(day) {
  let events = []
  day.forEach(event => {
    if (event.node.frontmatter.start_time === "17h20")
      events.push(
        <Event title="Coffee break" start_time="16h50" end_time="17h20" />
      )

    events.push(
      <Event
        title={event.node.frontmatter.title}
        type={event.node.frontmatter.type}
        speakers={event.node.frontmatter.speakers}
        start_time={event.node.frontmatter.start_time}
        end_time={event.node.frontmatter.end_time}
        place={event.node.frontmatter.place}
        path={event.node.frontmatter.path}
      />
    )
  })

  return events
}

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
              event.node.frontmatter.day !==
                data.allMarkdownRemark.edges[i - 1].node.frontmatter.day
            ) {
              days.push(day)
              day = []
            }
            day.push(event)
          }
          days.push(day)

          console.log(days)
          return days.map(day => (
            <DailySchedule
              key={day[0].node.frontmatter.day}
              date={day[0].node.frontmatter.day}
              events={getEvents(day)}
            />
          ))
        }}
      />
    </div>
  </Layout>
)

export default ProgramPage
