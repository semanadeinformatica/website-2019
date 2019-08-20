import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import landingStyles from "../styles/landing.module.css"

class Speakers extends Component {
  state = {
    index: 0,
    animating: false,
    visibleSpeakersClass: landingStyles.speakers1,
    previousSpeakersClass: landingStyles.previousSpeakers,
    nextSpeakersClass: landingStyles.nextSpeakers,
  }

  componentWillMount() {
    this.NUM_VISIBLE_SPEAKERS = window.matchMedia("(min-width: 500px)").matches
      ? 4
      : 1
  }

  getAllSpeakers(data) {
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

    return speakers
  }

  getSpeakers(index, allSpeakers) {
    let speakers = []

    if (index + this.NUM_VISIBLE_SPEAKERS > allSpeakers.length) {
      speakers.push(...allSpeakers.slice(index, allSpeakers.length))
      speakers.push(
        ...allSpeakers.slice(
          0,
          index + this.NUM_VISIBLE_SPEAKERS - allSpeakers.length
        )
      )
    } else {
      speakers = allSpeakers.slice(index, index + this.NUM_VISIBLE_SPEAKERS)
    }

    return speakers
  }

  handleNextClick = speakers => {
    if (this.state.animating) return false

    this.setState({
      animating: true,
      visibleSpeakersClass: [
        landingStyles.speakers1,
        landingStyles.moveLeft,
      ].join(" "),
      nextSpeakersClass: [
        landingStyles.nextSpeakers,
        landingStyles.moveLeft,
      ].join(" "),
    })

    setTimeout(() => {
      this.setState({
        index: (this.state.index + this.NUM_VISIBLE_SPEAKERS) % speakers.length,
        animating: false,
        visibleSpeakersClass: landingStyles.speakers1,
        nextSpeakersClass: landingStyles.nextSpeakers,
      })
    }, 1000)
  }

  handlePreviousClick = speakers => {
    if (this.state.animating) return false

    this.setState({
      animating: true,
      visibleSpeakersClass: [
        landingStyles.speakers1,
        landingStyles.moveRight,
      ].join(" "),
      previousSpeakersClass: [
        landingStyles.previousSpeakers,
        landingStyles.moveRight,
      ].join(" "),
    })

    setTimeout(() => {
      this.setState({
        index:
          this.state.index - this.NUM_VISIBLE_SPEAKERS < 0
            ? speakers.length + this.state.index - this.NUM_VISIBLE_SPEAKERS
            : this.state.index - this.NUM_VISIBLE_SPEAKERS,
        animating: false,
        visibleSpeakersClass: landingStyles.speakers1,
        previousSpeakersClass: landingStyles.previousSpeakers,
      })
    }, 1000)
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query MainSpeakersQuery {
            allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/talks/" } }
            ) {
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
        `}
        render={data => {
          const speakers = this.getAllSpeakers(data)

          return (
            <section className={landingStyles.speakersSection}>
              <h2 className={landingStyles.h2}>
                Speakers
                <hr className={landingStyles.headingLine} />
              </h2>
              <div className={landingStyles.speakersWrapper}>
                <div className={this.state.previousSpeakersClass}>
                  {this.getSpeakers(
                    this.state.index - this.NUM_VISIBLE_SPEAKERS < 0
                      ? speakers.length +
                          this.state.index -
                          this.NUM_VISIBLE_SPEAKERS
                      : this.state.index - this.NUM_VISIBLE_SPEAKERS,
                    speakers
                  )}
                </div>
                <div className={landingStyles.speakers}>
                  <button
                    className={landingStyles.prevButton}
                    onClick={() => this.handlePreviousClick(speakers)}
                  >
                    <FaArrowLeft />
                  </button>
                  <div className={this.state.visibleSpeakersClass}>
                    {this.getSpeakers(this.state.index, speakers)}
                  </div>
                  <button
                    className={landingStyles.nextButton}
                    onClick={() => this.handleNextClick(speakers)}
                  >
                    <FaArrowRight />
                  </button>
                </div>
                <div className={this.state.nextSpeakersClass}>
                  {this.getSpeakers(
                    (this.state.index + this.NUM_VISIBLE_SPEAKERS) %
                      speakers.length,
                    speakers
                  )}
                </div>
              </div>
              <Link className={landingStyles.allLink} to="/speakers">
                Ver todos os speakers
              </Link>
            </section>
          )
        }}
      />
    )
  }
}
export default Speakers
