import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import landingStyles from "../styles/landing.module.css"

const Speakers = () => {
  const NUM_VISIBLE_SPEAKERS = window.matchMedia("(min-width: 500px)").matches
    ? 4
    : 1
  const [index, setIndex] = useState(0)

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

  let speakers = []

  data.allMarkdownRemark.edges.map(({ node }) =>
    speakers.push(
      ...node.frontmatter.speakers.map(speaker => (
        <li
          key={`${speaker.name}${node.id}`}
          className={landingStyles.speaker}
          style={{
            width: window.matchMedia("(min-width: 500px)").matches
              ? "25%"
              : "100%",
          }}
        >
          <Img fluid={speaker.img.childImageSharp.fluid} alt={speaker.name} />
          <Link to={node.frontmatter.path}>Ver palestra</Link>
        </li>
      ))
    )
  )

  const getVisibleSpeakers = () => {
    let visibleSpeakers = []

    if (index + NUM_VISIBLE_SPEAKERS > speakers.length) {
      visibleSpeakers.push(...speakers.slice(index, speakers.length))
      visibleSpeakers.push(
        ...speakers.slice(0, index + NUM_VISIBLE_SPEAKERS - speakers.length)
      )
    } else {
      visibleSpeakers = speakers.slice(index, index + NUM_VISIBLE_SPEAKERS)
    }

    return visibleSpeakers
  }

  return (
    <ul className={landingStyles.speakers}>
      <button
        className={landingStyles.prevButton}
        onClick={() =>
          setIndex(
            index - NUM_VISIBLE_SPEAKERS < 0
              ? speakers.length + index - NUM_VISIBLE_SPEAKERS
              : index - NUM_VISIBLE_SPEAKERS
          )
        }
      >
        <FaArrowLeft />
      </button>
      {getVisibleSpeakers()}
      <button
        className={landingStyles.nextButton}
        onClick={() =>
          setIndex((index + NUM_VISIBLE_SPEAKERS) % speakers.length)
        }
      >
        <FaArrowRight />
      </button>
    </ul>
  )
}

export default Speakers
