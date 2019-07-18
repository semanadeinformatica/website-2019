import React from "react"
import PropTypes from "prop-types"
import {getMaxEndTime, length, sumTime} from "../utils/dailyScheduleUtils"

const DailySchedule = ({ date, events, increment }) => {
  const maxEndTime = getMaxEndTime(events)
  let numRows = length(events[0].props.start_time, maxEndTime) / increment

  let rows = []
  let row = []
  let colSpan = 1
  let initial_time = events[0].props.start_time
  let last_start_time = events[events.length - 1].props.start_time
  let blankCellIndex = 0
  let blankCellSpan = 0

  for (let i = 0, j = 0; i < numRows; i++) {
    let time = sumTime(initial_time, increment * i)

    for (; j < events.length && time === events[j].props.start_time; j++) {
      let span =
        length(events[j].props.start_time, events[j].props.end_time) / increment

      if (span === 0) span = row[row.length - 1].props.rowSpan

      if (events[j].props.title === "Check-in") {
        colSpan = 2
        span =
          length(events[j].props.start_time, events[j + 1].props.start_time) /
          increment
      }

      if (row.length === 0) {

        if (time === last_start_time) {
          let header_span = length(events[j].props.start_time, maxEndTime) / increment

          blankCellIndex = i + span
          blankCellSpan = header_span - span
        }

        row.push(
          <th key="time" scope="row">
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
        <React.Fragment key="blankCell">
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

DailySchedule.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
  increment: PropTypes.number.isRequired
}

export default DailySchedule
