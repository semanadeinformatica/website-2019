import React from "react"

const Occupations = ({ occupations }) => {
  return (
    <div>
      {occupations.map((occupation, index) => {
        return (
          <span>
            {occupation.what}
            {" @ "}
            {occupation.where}
            {index === occupations.length - 1 ? "" : ", "}
          </span>
        )
      })}
    </div>
  )
}

export default Occupations
