import React from "react"
import Img from "gatsby-image"

const styles = {
  image: {
    width: "248px",
    height: "248px",
  },
}

const Member = ({ data }) => {
  return (
    <div>
      <div>
        <Img fluid={data.img.childImageSharp.fluid} style={styles.image} />
        <div>
          <div>{data.name}</div>
          <div>{data.role}</div>
          <div>{data.linkedin ? <a href={data.linkedin}>LinkedIn</a> : ""}</div>
          <div>{data.github ? <a href={data.github}>GitHub</a> : ""}</div>
        </div>
      </div>
    </div>
  )
}

export default Member
