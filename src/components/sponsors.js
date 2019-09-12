import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleSponsor from "./single-sponsor"
import sponsorsStyles from "../styles/sponsors.module.css"
import Carousel from "./utils/carousel"

const getSponsors = (data, type) => {
  return data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.type === type)
    .map(({ node }) => (
      <SingleSponsor
        key={node.frontmatter.name}
        sponsor={node.frontmatter}
        main={type === "main"}
      />
    ))
}

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query SponsorsQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sponsors/" } }) {
        edges {
          node {
            id
            frontmatter {
              name
              type
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="sponsors" className={sponsorsStyles.sponsorsSection}>
      <h2 className={sponsorsStyles.h2}>
        Sponsors
        <hr className={sponsorsStyles.headingLine} />
      </h2>

      <div className={sponsorsStyles.mainSponsor}>
        <div className={sponsorsStyles.sponsorsType}>Main</div>
        <Carousel
          className={sponsorsStyles.carousel}
          numMobileItems={1}
          numDesktopItems={1}
          removeArrows={true}
        >
          {getSponsors(data, "main")}
        </Carousel>
      </div>

      <div className={sponsorsStyles.otherSponsors}>
        <div className={sponsorsStyles.sponsorsType}>Gold</div>
        <Carousel numMobileItems={1} numDesktopItems={1} removeArrows={true}>
          {getSponsors(data, "gold")}
        </Carousel>
      </div>

      <div className={sponsorsStyles.otherSponsors}>
        <div className={sponsorsStyles.sponsorsType}>Silver</div>
        <Carousel numMobileItems={1} numDesktopItems={1} removeArrows={true}>
          {getSponsors(data, "silver")}
        </Carousel>
      </div>

      <div className={sponsorsStyles.otherSponsors}>
        <div className={sponsorsStyles.sponsorsType}>Bronze</div>
        <Carousel numMobileItems={1} numDesktopItems={1} removeArrows={true}>
          {getSponsors(data, "bronze")}
        </Carousel>
      </div>

      <div className={sponsorsStyles.otherSponsors}>
        <div className={sponsorsStyles.sponsorsType}>Partner</div>
        <Carousel numMobileItems={1} numDesktopItems={1} removeArrows={true}>
          {getSponsors(data, "partner")}
        </Carousel>
      </div>
    </section>
  )
}

export default Sponsors
