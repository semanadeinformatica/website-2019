import React from "react"

import Overlay from "../utils/overlay"

const Member = ({ data, color }) => {
  return (
    <Overlay
      image={data.img.childImageSharp.fluid}
      color={color}
      linkedin={data.linkedin}
      github={data.github}
      website={data.website}
    >
      <div>{data.name}</div>
    </Overlay>
  )
}

export default Member
