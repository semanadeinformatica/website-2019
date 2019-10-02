import React from "react"
import { Link } from "gatsby"
import SoonStyles from "../../styles/soon.module.css"
import Icon from "../../images/svg/gradient-outline.inline.svg"

const Brevemente = () => {
  return (
    <div className={SoonStyles.banner}>
      <Icon className={SoonStyles.banner_icon} />
      <h1 className={SoonStyles.title}>Página em construção</h1>
      <Link className={SoonStyles.link} to="/">
        Voltar
      </Link>
    </div>
  )
}

export default Brevemente
