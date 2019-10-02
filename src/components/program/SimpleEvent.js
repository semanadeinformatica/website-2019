import React from "react"

import TimePlace from "./TimePlace"
import icons from "../utils/icons"

import eventsStyles from "../../styles/program/events.module.css"

const SimpleEvent = ({
  event: { title, start_time, end_time, place, icon },
}) => {
  const className = icon
    ? [eventsStyles.main, eventsStyles.simpleEvent, eventsStyles.withIcon].join(
        " "
      )
    : [eventsStyles.main, eventsStyles.simpleEvent].join(" ")
  return (
    <div data-date={start_time} className={className}>
      {icon && icons[icon]}
      <div className={eventsStyles.info}>
        <h4>{title}</h4>
        <TimePlace start_time={start_time} end_time={end_time} place={place} />
      </div>
    </div>
  )
}

export default SimpleEvent
