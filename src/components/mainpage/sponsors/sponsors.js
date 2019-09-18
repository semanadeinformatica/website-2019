import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import sponsorsStyles from "../../../styles/sponsors.module.css"
import SponsorSection, { getSponsors } from "../sponsors/sponsor-section"

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
        <div className={sponsorsStyles.mainWrapper}>
          {getSponsors(data, "main")}
        </div>
      </div>

      <SponsorSection type="gold" />
      <SponsorSection type="silver" />
      <SponsorSection type="bronze" />
    </section>
  )
}

export default Sponsors
