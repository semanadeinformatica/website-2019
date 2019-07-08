import React from "react"
import { Link } from "gatsby"

const Event = ({name, type, talker, startTime, endTime, location}) => (
    <div>
        <Link to="/"><h3>{name}</h3></Link>
        {talker != null && <p>{talker}</p>}
        <p>{type}</p>
        <p> {startTime} - {endTime} {location != null && <span>| location</span>}</p>
    </div>
)

export default Event;