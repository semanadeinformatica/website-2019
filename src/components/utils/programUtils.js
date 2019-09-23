import React from "react"
import { Link } from "gatsby"
import { FaAngleUp } from "react-icons/fa"

import eventsStyles from "../../styles/program/events.module.css"

export const TimePlace = ({ start_time, end_time, place }) => (
  <p className={eventsStyles.timePlace}>
    {start_time} {end_time && <span>- {end_time}</span>}{" "}
    {place && <span>| {place}</span>}
  </p>
)

export const Speakers = ({ speakers, path }) => (
  <>
    <h4>
      <Link to={path}>
        {speakers.map((speaker, i) =>
          i > 0 ? `, ${speaker.name}` : speaker.name
        )}
      </Link>
    </h4>
    <h5>
      {speakers.map(({ occupations }, i) =>
        i > 0
          ? `, ${occupations[0].what} @ ${occupations[0].where}`
          : `${occupations[0].what} @ ${occupations[0].where}`
      )}
    </h5>
  </>
)

export const DescriptionToggler = ({ id, showAll, setShowAll }) => (
  <div className={eventsStyles.toggler}>
    <input
      type="checkbox"
      checked={showAll}
      onChange={e => setShowAll(e.target.checked)}
      id={id}
    />
    <label for={id}>
      <FaAngleUp color="white" size="1.5rem" />
    </label>
  </div>
)
