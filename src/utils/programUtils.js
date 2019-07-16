import React from "react"

import Event from "../components/event"
import defaultEvents from "../data/events/defaultEvents"

export const splitDays = data => {
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

  return days
}

export const getEvents = day => {
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

    const {
      title,
      type,
      speakers,
      start_time,
      end_time,
      place,
      path,
    } = event.node.frontmatter

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
