import * as React from "react"
import FeaturedArticles from "../components/featured-articles"
import Hero from "../components/hero"
import Layout from "../components/layout"


import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  articlesList,
  snippet,
  snippetImage,
  snippetTitle,
  snippetMeta,
  btnPrimary
} from "../components/layout.module.css";


const IndexPage = ({data}) => {
  return (
    <Layout pageTitle="Home">
       <Hero />
       <FeaturedArticles>
        <div className={articlesList}>
          {data.allMdx.nodes.map((node) => (
            <article key={node.id} className={snippet}>
              <GatsbyImage
                image={
                  node.frontmatter.hero_image.childImageSharp.gatsbyImageData
                }
                alt={node.frontmatter.hero_image_alt}
                className={snippetImage}
              />
              <h2 className={snippetTitle}>
                <Link to={`/blog/${node.slug}`} className={snippetTitle}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p className={snippetMeta}>
                {" "}
                by <span>{node.frontmatter.author}</span> <span>on</span>{" "}
                {node.frontmatter.date}{" "}
              </p>
              <MDXRenderer>{node.body}</MDXRenderer>
              <Link to="/" className={btnPrimary}>
              Continue reading
            </Link>
            </article>
          ))}
        </div>
        </FeaturedArticles> 
    </Layout>
    
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          author
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        id
        body
        slug
        excerpt(pruneLength: 150)
      }
    }
  }
`;


