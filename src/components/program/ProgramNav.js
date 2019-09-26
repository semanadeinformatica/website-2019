import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"
import DayNavItem from "./DayNavItem"

import programStyles from "../../styles/program/program.module.css"

const ProgramNav = ({ days, activeTab, toggle }) => (
  <div>
    <Nav className="justify-content-center">
      {days.map((day, i) => {
        return (
          <NavItem
            key={day.node.id}
            className={
              activeTab.date === day.node.date
                ? [programStyles.navItemWrapper, programStyles.active].join(" ")
                : programStyles.navItemWrapper
            }
          >
            <NavLink onClick={() => toggle(day.node)}>
              <DayNavItem
                date={day.node.date}
                icon={day.node.icon}
                day={i + 1}
                active={activeTab.date === day.node.date}
              />
            </NavLink>
          </NavItem>
        )
      })}
    </Nav>
  </div>
)

export default ProgramNav
