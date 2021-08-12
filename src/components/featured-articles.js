import React from 'react'
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  articlesList,
  snippet,
  snippetImage,
  snippetTitle,
  snippetMeta,
} from "../components/layout.module.css";

function featuredArticles(props) {
    const articles = props.data.allMdx
    return (
        <div>
             {articles.nodes.map((node) => (
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
          </article>
        ))}
        </div>
    )
}

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

export default featuredArticles
