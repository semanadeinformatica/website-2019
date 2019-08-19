import React from "react"
import ContactStyles from "../../styles/contacts.module.css"

const map_query = '"FEUP, Porto, Portugal"'
const api_key = "AIzaSyD7BCaSIjFTOMKkzBMI6uzlJSsF19QJ4fs"
const src = `https://www.google.com/maps/embed/v1/place?q=${map_query}&key=${api_key}`
const Location = () => {
  return (
    <>
      <iframe
        className={ContactStyles.map}
        frameBorder={0}
        src={src}
        allowFullScreen
      ></iframe>
    </>
  )
}

export default Location
