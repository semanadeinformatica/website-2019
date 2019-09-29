import React from "react"
import ContactStyles from "../../../styles/mainpage/contacts.module.css"

const Location = () => {
  return (
    <>
      <iframe
        className={ContactStyles.map}
        frameBorder={0}
        title="Localização"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.010413180683!2d-8.599876284175785!3d41.17794007928396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246446d48922a3%3A0x8b1e4a0bcdacc840!2sFEUP+-+Faculdade+de+Engenharia+da+Universidade+do+Porto!5e0!3m2!1spt-PT!2spt!4v1566225783536!5m2!1spt-PT!2spt"
        allowFullScreen
      ></iframe>
    </>
  )
}

export default Location
