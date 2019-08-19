import React from "react"
import ContactStyles from "../../styles/contacts.module.css"

const Location = () => {
  return (
    <>
      <iframe
        className={ContactStyles.map}
        frameBorder={0}
        src='https://www.google.com/maps/embed/v1/place?q="FEUP, Porto, Portugal"&key=AIzaSyDVsFrpBDLRcoCoEY8Ylk8AXwZl5Tgaa3M'
        allowFullScreen
      ></iframe>
    </>
  )
}

export default Location
