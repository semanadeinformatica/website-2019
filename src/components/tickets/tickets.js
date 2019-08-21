import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ticketsStyles from "./tickets.module.css"

const countEvents = (data, event) => {
  let count = data.allMarkdownRemark.edges.filter(({ node }) =>
    node.fileAbsolutePath.includes(event)
  ).length

  if (count < 10) count = "0" + count

  return count
}

const Tickets = () => {
  return (
    <section id="tickets" className={ticketsStyles.section}>
      <StaticQuery
        query={graphql`
          query ShowcaseEvents {
            allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/events/[^d]/" } }
            ) {
              edges {
                node {
                  fileAbsolutePath
                }
              }
            }
          }
        `}
        render={data => {
          const numTalks = countEvents(data, "talks")
          const numWorkshops = countEvents(data, "workshops")
          const numVisits = countEvents(data, "numVisits")

          return (
            <ul className={ticketsStyles.wrapper}>
              <li>
                <p>03</p>
                <p>dias</p>
              </li>
              <li>
                <p>{numTalks}</p>
                <p>palestras</p>
              </li>
              <li>
                <p>{numWorkshops}</p>
                <p>workshops</p>
              </li>
              <li>
                <p>{numVisits}</p>
                <p>visitas</p>
              </li>
            </ul>
          )
        }}
      />
      <p>Os bilhetes estarão disponíveis brevemente</p>
    </section>
  )
}

export default Tickets
