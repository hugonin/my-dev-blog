import * as React from "react"
import featuredArticles from "../components/featured-articles"
import Hero from "../components/hero"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
       <Hero />
       <featuredArticles />
    </Layout>
  )
}

export default IndexPage
