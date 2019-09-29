import React, { useState } from "react"
import { TabContent, TabPane } from "reactstrap"

import SimpleEvent from "./SimpleEvent"
import CommonEvent from "./CommonEvent"
import EventsNav from "./EventsNav"

import programStyles from "../../styles/program/program.module.css"

const DailySchedule = ({ events }) => {
  const [activeTab, setActiveTab] = useState("talks")

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <>
      <EventsNav toggle={toggle} activeTab={activeTab} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="talks">
          <div className={programStyles.schedule}>
            {events
              .filter(
                event =>
                  event.node.fileAbsolutePath.includes("default") ||
                  event.node.fileAbsolutePath.includes("talks")
              )
              .map(event =>
                event.node.fileAbsolutePath.includes("default") ? (
                  <SimpleEvent
                    key={event.node.id}
                    event={event.node.frontmatter}
                  />
                ) : (
                  <CommonEvent
                    key={event.node.id}
                    event={event.node}
                    color="#2da6b0"
                  />
                )
              )}
          </div>
        </TabPane>
        <TabPane tabId="activities">
          <div className={programStyles.schedule}>
            {events
              .filter(event => !event.node.fileAbsolutePath.includes("talks"))
              .map(event => {
                const path = event.node.fileAbsolutePath
                let toRender

                if (path.includes("default")) {
                  toRender = (
                    <SimpleEvent
                      key={event.node.id}
                      event={event.node.frontmatter}
                    />
                  )
                } else if (path.includes("sessions")) {
                  toRender = (
                    <CommonEvent
                      key={event.node.frontmatter.start_time}
                      event={event.node}
                      color="#0c0044"
                    />
                  )
                } else if (path.includes("workshops")) {
                  toRender = (
                    <CommonEvent
                      key={event.node.frontmatter.start_time}
                      event={event.node}
                      color="#2da6b0"
                    />
                  )
                } else {
                  toRender = (
                    <CommonEvent
                      key={event.node.frontmatter.start_time}
                      event={event.node}
                      color="#000000"
                    />
                  )
                }

                return toRender
              })}
          </div>
        </TabPane>
      </TabContent>
    </>
  )
}

export default DailySchedule
