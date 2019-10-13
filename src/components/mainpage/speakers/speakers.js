import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import speakersStyles from "../../../styles/mainpage/speakers.module.css"
import Carousel from "../../utils/carousel"
import SingleSpeaker from "./SingleSpeaker"

const getAllSpeakers = data => {
  let speakers = []

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    node.frontmatter.type !== "Placeholder" &&
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
              type
            }
          }
        }
      }
    }
  `)

  const speakers = getAllSpeakers(data)

  return (
    speakers.length > 0 && (
      <section id="speakers" className={speakersStyles.speakersSection}>
        <h2 className={speakersStyles.h2}>
          Speakers
          <hr className={speakersStyles.headingLine} />
        </h2>
        <Carousel numMobileItems={1} numTabletItems={2} numDesktopItems={4}>
          {speakers.map(speaker => (
            <SingleSpeaker
              key={`${speaker.name}-${speaker.id}`}
              speaker={speaker}
              path={speaker.path}
            />
          ))}
        </Carousel>
        <Link className={speakersStyles.allLink} to="/speakers">
          Ver todos os speakers
        </Link>
      </section>
    )
  )
}

export default Speakers
