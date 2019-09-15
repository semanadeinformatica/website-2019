import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "reactstrap"
import ticketsStyles from "../../styles/mainpage/tickets.module.css"

const countEvents = (data, event) => {
  let count = data.allMarkdownRemark.edges.filter(({ node }) =>
    node.fileAbsolutePath.includes(event)
  ).length

  return String(count).padStart(2, "0")
}

const Tickets = () => {
  const data = useStaticQuery(graphql`
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
  `)

  const stats = [
    {
      type: "dias",
      count: "03",
    },
    {
      type: "palestras",
      count: countEvents(data, "talks"),
    },
    {
      type: "workshops",
      count: countEvents(data, "workshops"),
    },
    {
      type: "visitas",
      count: countEvents(data, "numVisits"),
    },
  ]

  return (
    <section id="tickets" className={ticketsStyles.section}>
      <Container>
        <ul className={ticketsStyles.wrapper}>
          {stats.map(({ type, count }) => (
            <li key={type}>
              <span>{count}</span>
              <span>{type}</span>
            </li>
          ))}
        </ul>
        <p className={ticketsStyles.lead}>
          Os bilhetes estarão disponíveis brevemente
        </p>
      </Container>
    </section>
  )
}

export default Tickets
