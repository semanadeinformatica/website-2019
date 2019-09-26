import React, { useState } from "react"
import { Link } from "gatsby"
import { Collapse } from "reactstrap"
import { TimePlace, Speakers, DescriptionToggler } from "../utils/programUtils"
import eventsStyles from "../../styles/program/events.module.css"

const CommonEvent = ({
  title,
  path,
  speakers,
  start_time,
  end_time,
  place,
  description,
  color,
}) => {
  const [showAll, setShowAll] = useState(false)
  return (
    <div
      data-date={start_time}
      className={[eventsStyles.commonEvent, eventsStyles.main].join(" ")}
    >
      <DescriptionToggler
        id={`toggleShowAll-${title}`}
        showAll={showAll}
        setShowAll={setShowAll}
        backgroundColor={color}
      />
      <div>
        <h3>
          <Link style={{ color }} to={path}>
            {path.includes("workshops") && "Workshop: "}{" "}
            <span
              className={
                !path.includes("sessions") ? eventsStyles.eventTitle : undefined
              }
            >
              {title}
            </span>
          </Link>
        </h3>
        {speakers && <Speakers speakers={speakers} path={path} />}
        <TimePlace start_time={start_time} end_time={end_time} place={place} />
        <Collapse isOpen={showAll}>
          <p
            className={eventsStyles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </Collapse>
      </div>
    </div>
  )
}

export default CommonEvent
