import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"
import DayNavItem from "./DayNavItem"

import programStyles from "../../styles/program/program.module.css"

const ProgramNav = ({ days, activeTab, toggle }) => (
  <div className={programStyles.programNavWrapper}>
    <div className={programStyles.programNavContainer}>
      <Nav className={programStyles.programNav}>
        {days.map((day, i) => {
          return (
            <NavItem
              key={day.node.id}
              className={
                activeTab.date === day.node.date
                  ? [programStyles.navItemWrapper, programStyles.active].join(
                      " "
                    )
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
      <div className={programStyles.themeHeader}>
        <h3 className={programStyles.themeHeading}>
          <span className={programStyles.theme}>Tema:</span> {activeTab.theme}
        </h3>
      </div>
    </div>
  </div>
)

export default ProgramNav
