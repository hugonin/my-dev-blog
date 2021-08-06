import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle = "Welcome to my blog!">
       <Hero />
    </Layout>
  )
}

export default IndexPage
