import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleSponsor from "./single-sponsor"
import sponsorsStyles from "../../../styles/sponsors.module.css"
import Carousel from "../../utils/carousel"

export const getSponsors = (data, type) => {
  return data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.type === type)
    .map(({ node }) => (
      <SingleSponsor
        key={node.frontmatter.name}
        sponsor={node.frontmatter}
        type={type}
      />
    ))
}

export const SponsorsQuery = graphql`
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
`

const SponsorSection = ({ type }) => {
  const data = useStaticQuery(SponsorsQuery)

  let wrapperType, sponsorText, sponsorType, numDesktop
  if (type === "gold") {
    wrapperType = sponsorsStyles.goldWrapper
    sponsorText = sponsorsStyles.goldSponsor
    sponsorType = "Gold"
    numDesktop = 4
  } else if (type === "silver") {
    wrapperType = sponsorsStyles.silverWrapper
    sponsorText = sponsorsStyles.silverSponsor
    sponsorType = "Silver"
    numDesktop = 7
  } else {
    wrapperType = sponsorsStyles.bronzeWrapper
    sponsorText = sponsorsStyles.bronzeSponsor
    sponsorType = "Bronze"
    numDesktop = 10
  }

  return (
    <div className={[sponsorsStyles.otherSponsors, wrapperType].join(" ")}>
      <div className={[sponsorsStyles.sponsorsType, sponsorText].join(" ")}>
        {sponsorType}
      </div>
      <Carousel
        numMobileItems={1}
        numDesktopItems={numDesktop}
        removeArrows={true}
      >
        {getSponsors(data, type)}
      </Carousel>
    </div>
  )
}

export default SponsorSection
