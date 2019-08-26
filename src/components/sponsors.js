import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleSponsor from "./single-sponsor"
import sponsorsStyles from "../styles/sponsors.module.css"

const getSponsors = (data, type) => {
  return data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.type === type)
    .map(({ node }) => <SingleSponsor sponsor={node.frontmatter} />)
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

      <div>
        <h1>Patrocínios</h1>

        {getSponsors(data, "main")}

        <h2>Patrocínio gold</h2>
        {getSponsors(data, "gold")}

        <h2>Patrocínio silver</h2>
        {getSponsors(data, "silver")}

        <h2>Patrocínio bronze</h2>
        {getSponsors(data, "bronze")}

        <h2>Parceiros</h2>
        {getSponsors(data, "partner")}
      </div>
    </section>
  )
}

export default Sponsors
