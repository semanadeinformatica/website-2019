import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import landingStyles from "../styles/landing.module.css"
import Carousel from "./utils/Carousel"

class Speakers extends Component {
  renderSpeaker(speaker, style) {
    return (
      <div
        key={`${speaker.name}-${speaker.id}`}
        className={landingStyles.speaker}
        style={style}
      >
        <Img fluid={speaker.img.childImageSharp.fluid} alt={speaker.name} />
        <Link to={speaker.path}>Ver palestra</Link>
      </div>
    )
  }

  getAllSpeakers(data) {
    let speakers = []

    data.allMarkdownRemark.edges.forEach(({ node }) => {
      const sp = node.frontmatter.speakers
      const path = node.frontmatter.path

      speakers.push(
        ...sp.map(speaker => ({
          ...speaker,
          path,
          id: node.id,
        }))
      )
    })

    return speakers
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
              <Carousel
                itemsData={speakers}
                renderItem={this.renderSpeaker}
                numMobileItems="1"
                numDesktopItems="4"
              />
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
