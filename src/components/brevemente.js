import React from "react"
import SoonStyles from "../styles/soon.module.css"
import Icon from "../images/svg/gradient-outline.inline.svg"

const Brevemente = () => {
  return (
    <div className={SoonStyles.banner}>
      <Icon className={SoonStyles.banner_icon} />
      <h1 className={SoonStyles.title}>Brevemente</h1>
      <a className={SoonStyles.link} href="https://sinf.pt/">
        Edição Anterior
      </a>
    </div>
  )
}

export default Brevemente
