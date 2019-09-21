import React from "react"
import PropTypes from "prop-types"

const DailySchedule = ({ children }) => {
  return <div>{children}</div>
}

DailySchedule.propTypes = {
  children: PropTypes.arrayOf(PropTypes.elementType).isRequired,
}

export default DailySchedule
