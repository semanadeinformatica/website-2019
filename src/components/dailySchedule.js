import React from "react"
import PropTypes from "prop-types"

const DailySchedule = ({ date, events }) => {
  let numRows =
    length(
      events[0].props.start_time,
      events[events.length - 1].props.end_time
    ) / 10

  let rows = []
  let row = []
  let maxSpan = 0;
  let initial_time = events[0].props.start_time

  for (let i = 0, j = 0; i < numRows; i++) {
    let time = sumTime(initial_time, 10 * i)

    for (; j < events.length && time === events[j].props.start_time; j++) {
      const span =
        length(events[j].props.start_time, events[j].props.end_time) / 10

      if(span > maxSpan)
        maxSpan = span;

      row.push(
        <td rowSpan={span} key={j}>
          {events[j]}
        </td>
      )

      maxSpan = 0
    }

    if (row.length === 0) row.push(<th key="time" scope="row"></th>)
    else
      row.unshift(
        <th key="time" scope="row" rowSpan={maxSpan}>
          {events[j - 1].props.start_time}
        </th>
      )

    rows.push(<tr key={time}>{row}</tr>)
    row = []
  }

  return (
    <div>
      <h2>{date}</h2>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

const length = (start_time, end_time) => {
  let start_split = start_time.split("h")
  let end_split = end_time.split("h")

  return start_split[1] > end_split[1]
    ? 60 -
        parseInt(start_split[1]) +
        parseInt(end_split[1]) +
        60 * (end_split[0] - start_split[0] - 1)
    : Math.abs(start_split[1] - end_split[1]) +
        60 * (end_split[0] - start_split[0])
}

const sumTime = (time, increment) => {
  let split = time.split("h")
  let minutes = parseInt(split[1]) + increment
  let hours = parseInt(split[0])
  const quocient = Math.floor((minutes) / 60)

  if (minutes >= 60) {
    hours += quocient
    minutes -= 60 * quocient
  } 

  return hours + "h" + minutes + (minutes === 0 ? "0" : "")
}

DailySchedule.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired
}

export default DailySchedule
