import React from "react"
import { Link } from "gatsby"

import eventsStyles from "../../styles/program/events.module.css"

const Speakers = ({ speakers, path }) => {
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

export default Speakers
