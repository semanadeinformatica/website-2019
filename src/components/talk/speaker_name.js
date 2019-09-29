import React from "react"

import SpeakerNameStyles from "../../styles/talk/speaker_name.module.css"

const SpeakerName = ({ name, occupations }) => {
  console.log(occupations)

  return (
    <div className={SpeakerNameStyles.container}>
      <div className={SpeakerNameStyles.name_container}>
        <div className={SpeakerNameStyles.name}>{name}</div>
        <hr />
      </div>
      <div className={SpeakerNameStyles.occupation}>
        {"@" + occupations[0].where}
      </div>
    </div>
  )
}

export default SpeakerName
