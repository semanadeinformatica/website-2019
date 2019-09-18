import React from "react"
import { useStaticQuery } from "gatsby"
import sponsorsStyles from "../../../styles/sponsors.module.css"
import SponsorSection, {
  SponsorsQuery,
  getSponsors,
} from "../sponsors/sponsor-section"

const Sponsors = () => {
  const data = useStaticQuery(SponsorsQuery)

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
