import React from "react"
import PropTypes from "prop-types"

const DailySchedule = ({ date, events }) => {
  let rows = []
  let row = [<th key="time" scope="row">{events[0].props.startTime}</th>]

  for (let i = 0; i < events.length; i++) {
    if (i > 0 && events[i].props.startTime !== events[i - 1].props.startTime) {
      rows.push(<tr key={events[i - 1].props.startTime}>{row}</tr>)
      row = []
      row.push(<th key="time" scope="row">{events[i].props.startTime}</th>)
    }

    row.push(<td key={i}>{events[i]}</td>)
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
  events: PropTypes.arrayOf(PropTypes.object),
}

export default DailySchedule
