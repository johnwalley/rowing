import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Blade, { clubs, names } from "react-rowing-blades"

const allNames = {
  ...names.cambridge,
  ...names.oxford,
  ...names.uk,
}

const allClubs = [...clubs.cambridge, ...clubs.oxford, ...clubs.uk].sort(
  (a, b) => {
    const nameA = a.toLowerCase()
    const nameB = b.toLowerCase()

    if (nameA < nameB) {
      return -1
    }

    if (nameA > nameB) {
      return 1
    }

    return 0
  }
)

export default ({ data }) => {
  console.log(data.file)
  return (
    <Layout>
      <h1>{allNames[data.file.name]}</h1>
      <button>Download svg</button>
      <button>Download png</button>

      <Blade club={data.file.name} size={400} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      name
    }
  }
`
