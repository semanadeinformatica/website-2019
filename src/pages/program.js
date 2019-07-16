import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DailySchedule from "../components/dailySchedule"

import Event from "../components/event"

export const eventsQuery = graphql`
  query Events {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "/events/"
        }
      },
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

const coffeBreak = (
  <Event title="Coffee break" start_time="16h40" end_time="17h10" />
)

const defaultEvents = {
  "29 Outubro": [
    <Event title="Check-in" start_time="11h00" end_time="17h00" place="Corredor do anfiteatro nobre"/>,
    <Event
      title="Cerimónia de abertura"
      start_time="14h00"
      end_time="15h00"
      place="B032"
    />,
    <Event title="Inicio da competição de programação" start_time="14h00" />,
    coffeBreak,
  ],
  "1 Novembro": [
    coffeBreak,
    <Event
      title="Cerimónia de encerramento"
      start_time="17h50"
      end_time="18h20"
      place="B032"
    />,
    <Event
      title="Porto de honra"
      start_time="18h20"
      end_time="18h50"
      place="local a anunciar"
    />,
  ],
}

const getEvents = day => {
  let events = []
  let dayDefaultEvents = defaultEvents[day[0].node.frontmatter.day]

  if (dayDefaultEvents == null) dayDefaultEvents = []

  for (let i = 0, j = 0; i < day.length; i++) {
    let event = day[i]

    while (
      j < dayDefaultEvents.length &&
      dayDefaultEvents[j].props.start_time < event.node.frontmatter.start_time
    ) {
      events.push(dayDefaultEvents[j])
      j++
    }

    const {title, type, speakers, start_time, end_time, place, path} = event.node.frontmatter

    events.push(
      <Event
        title={title}
        type={type}
        speakers={speakers}
        start_time={start_time}
        end_time={end_time}
        place={place}
        path={path}
      />
    )
  }

  return events
}

const splitDays = data => {
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

  return days;
}

const ProgramPage = ({data}) => (
  <Layout>
    <SEO title="Program" />
    <div>
      <h1>Program</h1>
          {splitDays(data).map(day => (
            <DailySchedule
              key={day[0].node.frontmatter.day}
              date={day[0].node.frontmatter.day}
              events={getEvents(day)}
              increment={10} 
            />
          ))
        }
    </div>
  </Layout>
)

export default ProgramPage
