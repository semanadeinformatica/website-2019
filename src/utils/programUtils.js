export const splitDays = data => {
  let days = []
  let day = []
  for (let i = 0; i < data.allMarkdownRemark.edges.length; i++) {
    let event = data.allMarkdownRemark.edges[i]
    if (
      i > 0 &&
      event.node.frontmatter.day !==
        data.allMarkdownRemark.edges[i - 1].node.frontmatter.day
    ) {
      days.push(day)
      day = []
    }
    day.push(event)
  }
  days.push(day)

  return days
}
