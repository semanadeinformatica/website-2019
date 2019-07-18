import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const printSpeakers = speakers => {
  let speakersText = ""

  for (let i = 0; i < speakers.length; i++) {
    if (i > 0) speakersText += " & "

    speakersText += speakers[i].name
  }

  return speakersText
}

const Event = ({
  title,
  type,
  path,
  speakers,
  start_time,
  end_time,
  place,
}) => (
  <div>
    {path != null ? (
      <Link to={path}>
        <h3>{title}</h3>
      </Link>
    ) : (
      <h3>{title}</h3>
    )}
    {speakers != null && <p>{printSpeakers(speakers)}</p>}
    {type != null && type.substring(2, type.length) === "workshop" && <p>Workshop</p>}
    <p>
      {start_time} {end_time != null && <span> - {end_time}</span>}
      {place != null && <span> | {place}</span>}
    </p>
  </div>
)

Event.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  path: PropTypes.string,
  speakers: PropTypes.arrayOf(PropTypes.object),
  start_time: PropTypes.string.isRequired,
  end_time: PropTypes.string,
  place: PropTypes.string,
}

export default Event
