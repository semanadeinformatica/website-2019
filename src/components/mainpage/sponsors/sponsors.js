import React from "react"
import sponsorsStyles from "../../../styles/sponsors.module.css"
import SponsorSection, { getSponsors } from "../sponsors/sponsor-section"
import { useSponsors } from "../../hooks/sponsors-query"

const Sponsors = () => {
  const data = useSponsors()
  const mainSponsors = getSponsors(data, "main")
  const goldSponsors = getSponsors(data, "gold")
  const silverSponsors = getSponsors(data, "silver")
  const bronzeSponsors = getSponsors(data, "bronze")

  return (
    <section id="sponsors" className={sponsorsStyles.sponsorsSection}>
      <h2 className={sponsorsStyles.h2}>
        Sponsors
        <hr className={sponsorsStyles.headingLine} />
      </h2>

      {mainSponsors.length > 0 && (
        <div className={sponsorsStyles.mainSponsor}>
          <div className={sponsorsStyles.sponsorsType}>Main</div>
          <div className={sponsorsStyles.mainWrapper}>
            {getSponsors(data, "main")}
          </div>
        </div>
      )}

      {goldSponsors.length > 0 && <SponsorSection type="gold" />}
      {silverSponsors.length > 0 && <SponsorSection type="silver" />}
      {bronzeSponsors.length > 0 && <SponsorSection type="bronze" />}
    </section>
  )
}

export default Sponsors
