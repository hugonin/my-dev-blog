import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import {mainArticle, containerNarrow, articleTitle, mainArticleImage} from "./layout.module.css"

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <article className={mainArticle}>
      <div className={containerNarrow}>
        <h1 className={articleTitle}>{mdx.frontmatter.title}</h1>
        <GatsbyImage
          image={mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData}
          alt={mdx.frontmatter.hero_image_alt}
          className={mainArticleImage}
        />
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </article>
  );
}

export const pageQuery = graphql`
  query {
    mdx(id: { eq: "id" }) {
      id
      body
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        hero_image_alt
        hero_image {
          childrenImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
