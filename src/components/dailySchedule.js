import React from "react"
import PropTypes from "prop-types"

const DailySchedule = ({ events }) => {
  let rows = []
  let row = []

  for (let i = 0; i < events.length; i++) {
    if (i > 0 && events[i].props.startTime !== events[i - 1].props.startTime) {
        
      rows.push(row)

      row = []
      row.push(<td>{events[i]}</td>)

    } else {
      row.push(<td>{events[i]}</td>)
    }
  }

  console.log(rows);

  return (
    <table>
      {rows.map(row => (
        <tr>{row}</tr>
      ))}
    </table>
  )
}

DailySchedule.propTypes = {
  events: PropTypes.arrayOf(PropTypes.func),
}

export default DailySchedule
