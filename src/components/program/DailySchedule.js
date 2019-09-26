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
                    title={event.node.frontmatter.title}
                    start_time={event.node.frontmatter.start_time}
                    end_time={event.node.frontmatter.end_time}
                    place={event.node.frontmatter.place}
                    icon={event.node.frontmatter.icon}
                  />
                ) : (
                  <CommonEvent
                    title={event.node.frontmatter.title}
                    start_time={event.node.frontmatter.start_time}
                    end_time={event.node.frontmatter.end_time}
                    place={event.node.frontmatter.place}
                    icon={event.node.frontmatter.icon}
                    path={event.node.frontmatter.path}
                    speakers={event.node.frontmatter.speakers}
                    description={event.node.html}
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

                if (path.includes("default") || path.includes("visits")) {
                  toRender = (
                    <SimpleEvent
                      title={event.node.frontmatter.title}
                      start_time={event.node.frontmatter.start_time}
                      end_time={event.node.frontmatter.end_time}
                      place={event.node.frontmatter.place}
                      icon={event.node.frontmatter.icon}
                    />
                  )
                } else if (path.includes("sessions")) {
                  toRender = (
                    <CommonEvent
                      title={event.node.frontmatter.title}
                      start_time={event.node.frontmatter.start_time}
                      end_time={event.node.frontmatter.end_time}
                      place={event.node.frontmatter.place}
                      path={event.node.frontmatter.path}
                      description={event.node.html}
                      color="#0c0044"
                    />
                  )
                } else if (path.includes("workshops")) {
                  toRender = (
                    <CommonEvent
                      title={event.node.frontmatter.title}
                      start_time={event.node.frontmatter.start_time}
                      end_time={event.node.frontmatter.end_time}
                      place={event.node.frontmatter.place}
                      path={event.node.frontmatter.path}
                      speakers={event.node.frontmatter.speakers}
                      description={event.node.html}
                      color="#2da6b0"
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
