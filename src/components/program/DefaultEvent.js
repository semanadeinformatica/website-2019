import React from "react"
import { TimePlace } from "../utils/programUtils"
import { FaCalendarCheck, FaCoffee } from "react-icons/fa"

const icons = {
  "calendar-check": <FaCalendarCheck />,
  coffe: <FaCoffee />,
}

const DefaultEvent = ({ title, start_time, end_time, place, icon }) => (
  <div>
    {icon && icons[icon]}
    <div>
      <h4>{title}</h4>
      <TimePlace start_time={start_time} end_time={end_time} place={place} />
    </div>
  </div>
)

export default DefaultEvent
