import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import landingStyles from "../styles/landing.module.css"

const NUM_VISIBLE_SPEAKERS = window.matchMedia("(min-width: 500px)").matches
  ? 4
  : 1

const getSpeakers = (index, allSpeakers) => {
  let speakers = []

  if (index + NUM_VISIBLE_SPEAKERS > allSpeakers.length) {
    speakers.push(...allSpeakers.slice(index, allSpeakers.length))
    speakers.push(
      ...allSpeakers.slice(0, index + NUM_VISIBLE_SPEAKERS - allSpeakers.length)
    )
  } else {
    speakers = allSpeakers.slice(index, index + NUM_VISIBLE_SPEAKERS)
  }

  return speakers
}

const Speakers = () => {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [visibleSpeakersClass, setVisibleSpeakersClass] = useState(
    landingStyles.speakers1
  )
  const [previousSpeakersClass, setPreviousSpeakersClass] = useState(
    landingStyles.previousSpeakers
  )
  const [nextSpeakersClass, setNextSpeakersClass] = useState(
    landingStyles.nextSpeakers
  )

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
        <div
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
        </div>
      ))
    )
  )

  return (
    <section className={landingStyles.speakersSection}>
      <h2 className={landingStyles.h2}>Speakers</h2>
      <hr className={landingStyles.headingLine} />
      <div className={landingStyles.speakersWrapper}>
        <div className={previousSpeakersClass}>
          {getSpeakers(
            index - NUM_VISIBLE_SPEAKERS < 0
              ? speakers.length + index - NUM_VISIBLE_SPEAKERS
              : index - NUM_VISIBLE_SPEAKERS,
            speakers
          )}
        </div>
        <div className={landingStyles.speakers}>
          <button
            className={landingStyles.prevButton}
            onClick={() => {
              if (animating) return false

              setAnimating(true)
              setVisibleSpeakersClass(
                [landingStyles.speakers1, landingStyles.moveRight].join(" ")
              )
              setPreviousSpeakersClass(
                [landingStyles.previousSpeakers, landingStyles.moveRight].join(
                  " "
                )
              )

              setTimeout(() => {
                setIndex(
                  index - NUM_VISIBLE_SPEAKERS < 0
                    ? speakers.length + index - NUM_VISIBLE_SPEAKERS
                    : index - NUM_VISIBLE_SPEAKERS
                )

                setVisibleSpeakersClass(landingStyles.speakers1)
                setPreviousSpeakersClass(landingStyles.previousSpeakers)
                setAnimating(false)
              }, 1000)
            }}
          >
            <FaArrowLeft />
          </button>
          <div className={visibleSpeakersClass}>
            {" "}
            {getSpeakers(index, speakers)}
          </div>
          <button
            className={landingStyles.nextButton}
            onClick={() => {
              if (animating) return false

              setAnimating(true)
              setVisibleSpeakersClass(
                [landingStyles.speakers1, landingStyles.moveLeft].join(" ")
              )
              setNextSpeakersClass(
                [landingStyles.nextSpeakers, landingStyles.moveLeft].join(" ")
              )

              setTimeout(() => {
                setIndex((index + NUM_VISIBLE_SPEAKERS) % speakers.length)
                setAnimating(false)
                setVisibleSpeakersClass(landingStyles.speakers1)
                setNextSpeakersClass(landingStyles.nextSpeakers)
              }, 1000)
            }}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className={nextSpeakersClass}>
          {getSpeakers(
            (index + NUM_VISIBLE_SPEAKERS) % speakers.length,
            speakers
          )}
        </div>
      </div>
      <Link className={landingStyles.allLink} to="/speakers">
        Ver todos os speakers
      </Link>
    </section>
  )
}

export default Speakers
