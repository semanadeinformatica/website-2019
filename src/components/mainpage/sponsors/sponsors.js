import React from "react"
import sponsorsStyles from "../../../styles/sponsors.module.css"
import SponsorSection, { getSponsors } from "../sponsors/sponsor-section"
import { useSponsors } from "../../hooks/sponsors-query"

const Sponsors = () => {
  const data = useSponsors()

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
