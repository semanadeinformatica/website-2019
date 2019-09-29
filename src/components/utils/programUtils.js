import React from "react"
import { Link } from "gatsby"
import {
  FaAngleUp,
  FaCalendarCheck,
  FaCoffee,
  FaRobot,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa"

import eventsStyles from "../../styles/program/events.module.css"

export const TimePlace = ({ start_time, end_time, place }) => (
  <p className={eventsStyles.timePlace}>
    {start_time} {end_time && <span>- {end_time}</span>}{" "}
    {place && <span>| {place}</span>}
  </p>
)

export const Speakers = ({ speakers, path }) => {
  const printOccupations = speakers => {
    let occupations = speakers.map(
      ({ occupations }) => `${occupations[0].what} @ ${occupations[0].where}`
    )

    occupations = occupations.filter(
      (occupation, index, self) => self.indexOf(occupation) === index
    )
    return occupations.map((occupation, index) =>
      index > 0 ? `, ${occupation}` : occupation
    )
  }

  return (
    <>
      <h3 className={eventsStyles.speakers}>
        <Link to={path}>
          {speakers.map((speaker, i) =>
            i > 0 ? `, ${speaker.name}` : speaker.name
          )}
        </Link>
      </h3>
      <h5 className={eventsStyles.occupations}>{printOccupations(speakers)}</h5>
    </>
  )
}

export const DescriptionToggler = ({
  id,
  showAll,
  setShowAll,
  backgroundColor,
}) => (
  <div className={eventsStyles.toggler}>
    <input
      type="checkbox"
      checked={showAll}
      onChange={e => setShowAll(e.target.checked)}
      id={id}
    />
    <label htmlFor={id} style={{ backgroundColor }}>
      <FaAngleUp color="white" size="1.5rem" />
    </label>
  </div>
)

export const icons = {
  "calendar-check": <FaCalendarCheck color="#0c0044" size="2em" />,
  coffee: <FaCoffee color="#0c0044" size="2.5em" />,
  robot: <FaRobot />,
  "shield-alt": <FaShieldAlt />,
  "user-tie": <FaUserTie />,
}
