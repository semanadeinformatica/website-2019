import React from "react"

import SpeakerNameStyles from "../../styles/talk/speaker_name.module.css"
import Occupations from "./occupations"

const SpeakerName = ({ name, occupations }) => {
  return (
    <div className={SpeakerNameStyles.container}>
      <div className={SpeakerNameStyles.name_container}>
        <div className={SpeakerNameStyles.name}>{name}</div>
        <hr />
      </div>
      <Occupations occupations={occupations} />
    </div>
  )
}

export default SpeakerName
