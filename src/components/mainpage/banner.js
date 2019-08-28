import React from "react"

import BannerStyles from "../../styles/banner.module.css"
import Icon from "../../images/svg/logo_sinf_comp.inline.svg"
import BasicInfo from "./basic-info"

const Banner = () => {
  return (
    <div className={BannerStyles.banner}>
      <Icon className={BannerStyles.icon} />
      <div className={BannerStyles.basic_info}>
        <BasicInfo />
      </div>
    </div>
  )
}

export default Banner
