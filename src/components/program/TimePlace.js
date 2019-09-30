import React from "react"

import eventsStyles from "../../styles/program/events.module.css"

const TimePlace = ({ start_time, end_time, place }) => (
  <p className={eventsStyles.timePlace}>
    {start_time} {end_time && <span>- {end_time}</span>}{" "}
    {place && <span>| {place}</span>}
  </p>
)

export default TimePlace
