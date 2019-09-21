import React from "react"
import { Link } from "gatsby"

export const TimePlace = ({ start_time, end_time, place }) => (
  <p>
    {start_time}-{end_time} | {place}
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
