import React from "react"
import PropTypes from "prop-types"

const getMaxEndTime = events => {
  let max = events[0].props.end_time

  events.forEach(event => {
    if (event.props.end_time > max) max = event.props.end_time
  })

  return max
}

const DailySchedule = ({ date, events }) => {
  const maxEndTime = getMaxEndTime(events)
  let numRows = length(events[0].props.start_time, maxEndTime) / 10

  let rows = []
  let row = []
  let colSpan = 1
  let initial_time = events[0].props.start_time
  let last_start_time = events[events.length - 1].props.start_time
  let blankCellIndex = 0
  let blankCellSpan = 0

  for (let i = 0, j = 0; i < numRows; i++) {
    let time = sumTime(initial_time, 10 * i)

    for (; j < events.length && time === events[j].props.start_time; j++) {
      let span =
        length(events[j].props.start_time, events[j].props.end_time) / 10

      if (span === 0) span = row[row.length - 1].props.rowSpan

      if (events[j].props.title === "Check-in") {
        colSpan = 2
        span =
          length(events[j].props.start_time, events[j + 1].props.start_time) /
          10
      }

      if (row.length === 0) {
        let header_span = span

        if (time === last_start_time) {
          header_span = length(events[j].props.start_time, maxEndTime) / 10

          blankCellIndex = i + span
          blankCellSpan = header_span - span
        }

        row.push(
          <th key="time" scope="row" rowSpan={span}>
            {events[j].props.start_time}
          </th>
        )
      }

      row.push(
        <td colSpan={colSpan} rowSpan={span} key={j}>
          {events[j]}
        </td>
      )

      colSpan = 1
    }

    if (i === blankCellIndex)
      row.push(
        <React.Fragment>
          <th rowSpan={blankCellSpan}></th>
          <td rowSpan={blankCellSpan}></td>
        </React.Fragment>
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
  if (end_time == null || start_time == null) return 0

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
  const quocient = Math.floor(minutes / 60)

  if (minutes >= 60) {
    hours += quocient
    minutes -= 60 * quocient
  }

  return hours + "h" + minutes + (minutes === 0 ? "0" : "")
}

DailySchedule.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
}

export default DailySchedule
