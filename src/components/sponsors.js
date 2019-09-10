import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleSponsor from "./single-sponsor"
import sponsorsStyles from "../styles/sponsors.module.css"
import Carousel from "./utils/carousel"

const getSponsors = (data, type) => {
  return data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.type === type)
    .map(({ node }) => (
      <SingleSponsor sponsor={node.frontmatter} main={type === "main"} />
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

      <Carousel numMobileItems={1} numDesktopItems={3}>
        {getSponsors(data, "gold")}
        {getSponsors(data, "silver")}
      </Carousel>

      <div className={sponsorsStyles.mainSponsor}>
        <div className={sponsorsStyles.sponsorsType}>Main</div>
        {getSponsors(data, "main")}
      </div>

      <div>
        <h2 className={sponsorsStyles.sponsorsType}>Gold</h2>
        {getSponsors(data, "gold")}
      </div>

      <div>
        <h2 className={sponsorsStyles.sponsorsType}>Silver</h2>
        {getSponsors(data, "silver")}
      </div>

      <div>
        <h2 className={sponsorsStyles.sponsorsType}>Bronze</h2>
        {getSponsors(data, "bronze")}
      </div>

      <div>
        <h2 className={sponsorsStyles.sponsorsType}>Parceiros</h2>
        {getSponsors(data, "partner")}
      </div>
    </section>
  )
}

export default Sponsors
