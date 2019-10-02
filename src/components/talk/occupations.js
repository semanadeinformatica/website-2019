import React from "react"
import SpeakerNameStyles from "../../styles/talk/speaker_name.module.css"

const Occupations = ({ occupations }) => {
  return (
    <div className={SpeakerNameStyles.occupation}>
      {occupations.map((occupation, index) => {
        return (
          <span key={occupation.what}>
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
