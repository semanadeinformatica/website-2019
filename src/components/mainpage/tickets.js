import React from "react"
import { Container } from "reactstrap"
import ticketsStyles from "../../styles/mainpage/tickets.module.css"

const Tickets = () => {
  const stats = [
    {
      type: "dias",
      count: "03",
    },
    {
      type: "palestras",
      count: "13",
    },
    {
      type: "workshops",
      count: "03",
    },
    {
      type: "visitas",
      count: "02",
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

export default Tickets;
