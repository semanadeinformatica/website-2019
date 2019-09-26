import React, { useState } from "react"
import { graphql } from "gatsby"
import { Container, TabContent, TabPane } from "reactstrap"
import Layout from "../components/common/layout"
import SEO from "../components/common/seo"

import ProgramNav from "../components/program/ProgramNav"
import DailySchedule from "../components/program/DailySchedule"

import { splitDays } from "../utils/programUtils"

export const eventsQuery = graphql`
  query Events {
    allThemesJson {
      edges {
        node {
          date
          icon
          id
          theme
        }
      }
    }
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
  const today = new Date()
  const dd = String(today.getDate())
  const mm = today.getMonth() + 1
  const yy = today.getFullYear()
  const defaultDate =
    (mm === 10 &&
      yy === 2019 &&
      data.allThemesJson.edges.find(day => day.node.date.split(" ")[0] === dd)
        .node) ||
    data.allThemesJson.edges[0].node

  const [activeTab, setActiveTab] = useState(defaultDate)
  const days = splitDays(data)

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <Layout>
      <SEO title="Program" />
      <Container>
        <h1>Program</h1>
        <ProgramNav
          days={data.allThemesJson.edges}
          activeTab={activeTab}
          toggle={toggle}
        />
        <TabContent activeTab={activeTab.date}>
          {days.map(day => (
            <TabPane tabId={day[0].node.frontmatter.day}>
              <DailySchedule events={day} />
            </TabPane>
          ))}
        </TabContent>
      </Container>
    </Layout>
  )
}

export default ProgramPage
