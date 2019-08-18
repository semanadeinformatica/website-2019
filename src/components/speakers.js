import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import landingStyles from "../styles/landing.module.css"

const Speakers = () => {
  const data = useStaticQuery(graphql`
    query MainSpeakersQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/talks/" } }) {
        edges {
          node {
            frontmatter {
              speakers {
                name
                img {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              path
            }
          }
        }
      }
    }
  `)

  return (
    <ul className={landingStyles.speakers}>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        node.frontmatter.speakers.map(speaker => (
          <li key={speaker.name} className={landingStyles.speaker}>
            <Img fluid={speaker.img.childImageSharp.fluid} alt={speaker.name} />
            <div className={landingStyles.speakerOverlay}></div>
            <Link to={node.frontmatter.path}>Ver palestra</Link>
          </li>
        ))
      )}
    </ul>
  )
}

export default Speakers
