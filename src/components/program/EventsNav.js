import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"

import programStyles from "../../styles/program/program.module.css"

const EventsNav = ({ toggle, activeTab }) => (
  <Nav className="justify-content-center">
    <NavItem>
      <NavLink
        onClick={() => toggle("talks")}
        className={
          activeTab === "talks"
            ? [programStyles.innerTab, programStyles.active].join(" ")
            : programStyles.innerTab
        }
      >
        Palestras
        {activeTab === "talks" && <hr className={programStyles.headingLine} />}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        onClick={() => toggle("activities")}
        className={
          activeTab === "activities"
            ? [programStyles.innerTab, programStyles.active].join(" ")
            : programStyles.innerTab
        }
      >
        Atividades
        {activeTab === "activities" && (
          <hr className={programStyles.headingLine} />
        )}
      </NavLink>
    </NavItem>
  </Nav>
)

export default EventsNav
