import React from "react"

import Styles from "../../styles/talk/time_place.module.css"

const TimePlace = ({ time, place }) => {
  return (
    <div className={Styles.container}>
      {time} {" • "} {place}
    </div>
  )
}

export default TimePlace
