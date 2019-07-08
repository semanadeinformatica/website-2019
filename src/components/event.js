import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'

const Event = ({ name, type, talker, startTime, endTime, location }) => (
  <div>
    <Link to="/">
      <h3>{name}</h3>
    </Link>
    {talker != null && <p>{talker}</p>}
    <p>{type}</p>
    <p>
      {startTime} - {endTime} {location != null && <span>| {location}</span>}
    </p>
  </div>
)

Event.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  talker: PropTypes.string,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  location: PropTypes.string,
}

export default Event
