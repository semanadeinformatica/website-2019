import React, { useState } from "react"
import { Link } from "gatsby"
import { Collapse } from "reactstrap"

import TimePlace from "./TimePlace"
import Speakers from "./Speakers"
import DescriptionToggler from "./DescriptionToggler"

import eventsStyles from "../../styles/program/events.module.css"
import SimpleEvent from "./SimpleEvent"

const CommonEvent = ({ color, event }) => {
  const {
    html,
    frontmatter: { title, path, speakers, start_time, end_time, place, type },
  } = event
  const [showAll, setShowAll] = useState(false)
  return type === "Placeholder" ? (
    <SimpleEvent event={event.frontmatter} />
  ) : (
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
        <h3 className={eventsStyles.title}>
          <Link style={{ color }} to={path}>
            {path.includes("workshops") && "Workshop: "}{" "}
            <span
              className={
                !path.match(/sessions|visits/)
                  ? eventsStyles.eventTitle
                  : undefined
              }
            >
              {title}
            </span>
          </Link>
        </h3>
        {speakers && <Speakers speakers={speakers} path={path} />}
        <TimePlace start_time={start_time} end_time={end_time} place={place} />
        <Collapse isOpen={showAll}>
          <div
            className={eventsStyles.description}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Collapse>
      </div>
    </div>
  )
}

export default CommonEvent
