import React from "react"
import PropTypes from "prop-types"

const DailySchedule = ({ events }) => {
  let rows = []
  let row = [<th scope="row">{events[0].props.startTime}</th>]

  for (let i = 0; i < events.length; i++) {
    if (i > 0 && events[i].props.startTime !== events[i - 1].props.startTime) {
      rows.push(<tr>{row}</tr>)
      row = []
      row.push(<th scope="row">{events[i].props.startTime}</th>)
    }

    row.push(<td>{events[i]}</td>)
  }

  return (
    <table>
      {rows}
    </table>
  )
}

DailySchedule.propTypes = {
  events: PropTypes.arrayOf(PropTypes.func),
}

export default DailySchedule
