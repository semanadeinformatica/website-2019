import React from "react"
import { FaLinkedin, FaFacebookSquare, FaEnvelope } from "react-icons/fa"
import BannerStyles from "../../../styles/mainpage/banner.module.css"

const links = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/sinffeup/",
  },
  {
    icon: <FaFacebookSquare />,
    href: "https://facebook.com/sinfFEUP",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:geral@sinf.pt",
  },
]

const BasicInfo = () => {
  return (
    <div className={BannerStyles.info}>
      <p>2ª EDIÇÃO</p>
      <p>28 A 30 OUTUBRO 2019 | FEUP</p>
      <div className={BannerStyles.icon_links}>
        {links.map(({ icon, href }, index) => (
          <a href={href} className={BannerStyles.icon_link} key={index}>
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default BasicInfo
