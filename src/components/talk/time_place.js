import React from "react"

import TimeStyles from "../../styles/talk/time_place.module.css"

const TimePlace = ({ time, place }) => {
  return (
    <div className={TimeStyles.container}>
      {time} {" • "} {place}
    </div>
  )
}

export default TimePlace
