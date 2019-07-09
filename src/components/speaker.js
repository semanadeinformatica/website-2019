import React from "react"
import Img from "gatsby-image"

const Speaker = ({ data }) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <Img fluid={data.img.childImageSharp.fluid} />
      <p>{data.occupation}</p>
      <p>{data.workplace}</p>
      <p>{data.bio}</p>
      <a href={data.twitter}>Twitter</a>
      <a href={data.linkedin}>LinkedIn</a>
      <a href={data.website}>Website</a>
    </div>
  )
}

export default Speaker
