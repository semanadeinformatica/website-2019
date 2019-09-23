import React from "react"

const Occupations = ({ occupations }) => {
  return (
    <div>
      {occupations.map((occupation, index) => (
        <span key={occupation.what}>
          {occupation.what}
          {" @ "}
          {occupation.where}
          {index === occupations.length - 1 ? "" : ", "}
        </span>
      ))}
    </div>
  )
}

export default Occupations
