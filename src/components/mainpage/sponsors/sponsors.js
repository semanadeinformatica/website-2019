import React from "react"
import sponsorsStyles from "../../../styles/mainpage/sponsors.module.css"
import SponsorSection, { getSponsors } from "../sponsors/sponsor-section"
import { useSponsors } from "../../hooks/sponsors-query"

const Sponsors = () => {
  const data = useSponsors()
  const mainSponsors = getSponsors(data, "main")
  const goldSponsors = getSponsors(data, "gold")
  const silverSponsors = getSponsors(data, "silver")
  const bronzeSponsors = getSponsors(data, "bronze")

  return (
    (mainSponsors.length > 0 ||
      goldSponsors.length > 0 ||
      silverSponsors.length > 0 ||
      bronzeSponsors.length > 0) && (
      <section id="sponsors" className={sponsorsStyles.sponsorsSection}>
        <h2 className={sponsorsStyles.h2}>
          Sponsors
          <hr className={sponsorsStyles.headingLine} />
        </h2>

        {mainSponsors.length > 0 && (
          <div className={sponsorsStyles.mainSponsor}>
            <div className={sponsorsStyles.sponsorsType}>Main</div>
            <div className={sponsorsStyles.mainWrapper}>{mainSponsors}</div>
          </div>
        )}

        <SponsorSection sponsorData={goldSponsors} type="gold" />
        <SponsorSection sponsorData={silverSponsors} type="silver" />
        <SponsorSection sponsorData={bronzeSponsors} type="bronze" />
      </section>
    )
  )
}

export default Sponsors
