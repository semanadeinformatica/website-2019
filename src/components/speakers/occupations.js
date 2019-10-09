import React from "react"

import OccupationsStyles from "../../styles/utils/occupations.module.css"

const Occupations = ({ occupations }) => {
  return (
    <div>
      {occupations.map((occupation, index) => (
        <span key={index} className={OccupationsStyles.occupations}>
          {" @ "}
          {occupation.where}
          {index === occupations.length - 1 ? "" : ", "}
        </span>
      ))}
    </div>
  )
}

export default Occupations
