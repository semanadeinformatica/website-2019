import React from "react"
import { FaCalendarCheck, FaCoffee } from "react-icons/fa"
import { TimePlace } from "../utils/programUtils"
import eventsStyles from "../../styles/program/events.module.css"

const icons = {
  "calendar-check": <FaCalendarCheck color="#0c0044" size="2em" />,
  coffee: <FaCoffee color="#0c0044" size="2.5em" />,
}

const SimpleEvent = ({ title, start_time, end_time, place, icon }) => {
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
