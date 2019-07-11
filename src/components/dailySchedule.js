import React from "react"
import PropTypes from "prop-types"

const DailySchedule = ({ date, events }) => {
  console.log(events)
  let rows = []
  let row = [
    <th key="time" scope="row">
      {events[0].props.start_time}
    </th>,
  ]

  for (let i = 0; i < events.length; i++) {
    if (
      i > 0 &&
      events[i].props.start_time !== events[i - 1].props.start_time
    ) {
      rows.push(<tr key={events[i - 1].props.start_time}>{row}</tr>)
      row = []
      row.push(
        <th key="time" scope="row">
          {events[i].props.start_time}
        </th>
      )
    }

    row.push(<td key={i}>{events[i]}</td>)
  }

  if (row.length > 0)
    rows.push(<tr key={events[events.length - 1].props.start_time}>{row}</tr>)

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
  events: PropTypes.arrayOf(PropTypes.object),
}

export default DailySchedule
