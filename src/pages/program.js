import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import SimpleEvent from "../components/program/SimpleEvent"
import CommonEvent from "../components/program/CommonEvent"

import { splitDays } from "../utils/programUtils"
import programStyles from "../styles/program/program.module.css"

export const eventsQuery = graphql`
  query Events {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/events/" } }
      sort: { fields: [frontmatter___day, frontmatter___start_time] }
    ) {
      edges {
        node {
          fileAbsolutePath
          html
          frontmatter {
            day(formatString: "D MMMM", locale: "pt-PT")
            end_time
            place
            start_time
            title
            path
            icon
            speakers {
              name
              occupations {
                what
                where
              }
            }
          }
        }
      }
    }
  }
`

const ProgramPage = ({ data }) => {
  const [activeTab, setActiveTab] = useState("talks")
  const days = splitDays(data)
  const day = days[0]

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <Layout>
      <SEO title="Program" />
      <Container>
        <h1>Program</h1>
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
              {activeTab === "talks" && (
                <hr className={programStyles.headingLine} />
              )}
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
        <TabContent activeTab={activeTab}>
          <TabPane tabId="talks">
            <div className={programStyles.schedule}>
              {day
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
              {day
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
      </Container>
    </Layout>
  )
}

export default ProgramPage
