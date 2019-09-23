import React, { useState } from "react"
import { Link } from "gatsby"
import { Collapse } from "reactstrap"
import { TimePlace, Speakers, DescriptionToggler } from "../utils/programUtils"
import eventsStyles from "../../styles/program/events.module.css"

const Talk = ({
  title,
  path,
  speakers,
  start_time,
  end_time,
  place,
  description,
}) => {
  const [showAll, setShowAll] = useState(false)
  return (
    <div
      data-date={start_time}
      className={[eventsStyles.talk, eventsStyles.main].join(" ")}
    >
      <DescriptionToggler
        id={`toggleShowAll-${title}`}
        showAll={showAll}
        setShowAll={setShowAll}
      />
      <div>
        <h3>
          <Link to={path}>{title}</Link>
        </h3>
        <Speakers speakers={speakers} path={path} />
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

export default Talk
