import React from "react"

import Styles from "../../styles/talk/speaker_name.module.css"

const SpeakerName = ({ name, twitter }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.name_container}>
        <span className={Styles.name}>{name}</span>
        <hr />
      </div>
      {twitter ? (
        <div>
          <a className={Styles.link} href={twitter}>
            @ twitter
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default SpeakerName
