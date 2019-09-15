import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import speakersStyles from "../../styles/mainpage/speakers.module.css"
import Carousel from "../utils/carousel"

const Speaker = ({ speaker }) => (
  <div className={speakersStyles.speaker}>
    <Img fluid={speaker.img.childImageSharp.fluid} alt={speaker.name} />
    <Link to={speaker.path}>Ver palestra</Link>
  </div>
)

const getAllSpeakers = data => {
  let speakers = []

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    speakers.push(
      ...node.frontmatter.speakers.map(speaker => ({
        ...speaker,
        path: node.frontmatter.path,
        id: node.id,
      }))
    )
  })

  return speakers
}

const Speakers = () => {
  const data = useStaticQuery(graphql`
    query MainSpeakersQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/talks/" } }) {
        edges {
          node {
            id
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

  const speakers = getAllSpeakers(data)

  return (
    <section id="speakers" className={speakersStyles.speakersSection}>
      <h2 className={speakersStyles.h2}>
        Speakers
        <hr className={speakersStyles.headingLine} />
      </h2>
      <Carousel numMobileItems={1} numDesktopItems={4}>
        {speakers.map(speaker => (
          <Speaker key={`${speaker.name}-${speaker.id}`} speaker={speaker} />
        ))}
      </Carousel>
      <Link className={speakersStyles.allLink} to="/speakers">
        Ver todos os speakers
      </Link>
    </section>
  )
}

export default Speakers
