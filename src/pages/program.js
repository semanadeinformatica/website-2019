import React, { useState } from "react"
import { graphql } from "gatsby"
import { Container, TabContent, TabPane } from "reactstrap"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"

import ProgramNav from "../components/program/ProgramNav"
import DailySchedule from "../components/program/DailySchedule"
import PageBanner from "../components/utils/page_banner"

import PageHeader from "../images/svg/programa.inline.svg"
import programStyles from "../styles/program/program.module.css"

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
          id
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
            type
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
  const [activeTab, setActiveTab] = useState(data.allThemesJson.edges[0].node)
  const days = splitDays(data)

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <Layout>
      <SEO title="Program" />
      <PageBanner>
        <PageHeader />
      </PageBanner>
      <Container className={programStyles.container}>
        <ProgramNav
          days={data.allThemesJson.edges}
          activeTab={activeTab}
          toggle={toggle}
        />
        <TabContent activeTab={activeTab.date}>
          {days.map(day => (
            <TabPane
              key={day[0].node.frontmatter.day}
              tabId={day[0].node.frontmatter.day}
            >
              <DailySchedule events={day} />
            </TabPane>
          ))}
        </TabContent>
      </Container>
    </Layout>
  )
}

export default ProgramPage
