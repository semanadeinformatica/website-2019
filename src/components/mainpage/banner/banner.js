import React from "react"

import BasicInfo from "./basic-info"

import BannerStyles from "../../../styles/mainpage/banner.module.css"
import Icon from "../../../images/svg/logo_sinf_comp.inline.svg"

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
