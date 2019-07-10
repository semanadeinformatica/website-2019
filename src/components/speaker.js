import React from "react"
import Img from "gatsby-image"
import Occupations from "./occupations"

const styles = {
  image: {
    width: "100px",
    height: "100px",
  },
}

const Speaker = ({ data }) => {
  return (
    <div>
      <div>
        <Img fluid={data.img.childImageSharp.fluid} style={styles.image} />
        <div>{data.name}</div>
        <div>
          <Occupations occupations={data.occupations} />
        </div>
      </div>
      <p>{data.bio}</p>
      {data.twitter ? <a href={data.twitter}>Twitter</a> : ""}
      {data.linkedin ? <a href={data.linkedin}>LinkedIn</a> : ""}
      {data.website ? <a href={data.website}>Website</a> : ""}
    </div>
  )
}

export default Speaker
