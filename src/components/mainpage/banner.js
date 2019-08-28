import React from "react"

import BasicInfo from "./basic-info"
import Navbar from "../navbar"

import BannerStyles from "../../styles/banner.module.css"
import MainpageStyles from "../../styles/mainpage.module.css"
import Icon from "../../images/svg/logo_sinf_comp.inline.svg"

const Banner = () => {
  return (
    <div className={BannerStyles.banner}>
      <span className={MainpageStyles.sticky}>
        <Navbar transparent />
      </span>
      <Icon className={BannerStyles.icon} />
      <div className={BannerStyles.basic_info}>
        <BasicInfo />
      </div>
    </div>
  )
}

export default Banner
