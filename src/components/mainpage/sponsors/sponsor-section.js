import React from "react"
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

const SponsorSection = ({ sponsorData, type }) => {
  let wrapperType, sponsorText, sponsorType, numDesktop
  numDesktop = sponsorData.length

  if (type === "gold") {
    wrapperType = sponsorsStyles.goldWrapper
    sponsorText = sponsorsStyles.goldSponsor
    sponsorType = "Gold"
  } else if (type === "silver") {
    wrapperType = sponsorsStyles.silverWrapper
    sponsorText = sponsorsStyles.silverSponsor
    sponsorType = "Silver"
  } else {
    wrapperType = sponsorsStyles.bronzeWrapper
    sponsorText = sponsorsStyles.bronzeSponsor
    sponsorType = "Bronze"
  }

  return (
    numDesktop > 0 && (
      <div className={[sponsorsStyles.otherSponsors, wrapperType].join(" ")}>
        <div className={[sponsorsStyles.sponsorsType, sponsorText].join(" ")}>
          {sponsorType}
        </div>
        <Carousel
          numMobileItems={1}
          numDesktopItems={numDesktop}
          removeArrows={true}
        >
          {sponsorData}
        </Carousel>
      </div>
    )
  )
}

export default SponsorSection
