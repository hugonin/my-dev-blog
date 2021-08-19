import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

import {
  mainArticle,
  containerNarrow,
  articleTitle,
  mainArticleImage,
} from "../../components/layout.module.css";

const BlogPost = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article className={mainArticle}>
        <div className={containerNarrow}>
          <GatsbyImage
            image={
              data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData
            }
            alt={data.mdx.frontmatter.hero_image_alt}
            className={mainArticleImage}
          />
          <h1 className={articleTitle}>{data.mdx.frontmatter.title}</h1>
          <p>{data.mdx.frontmatter.date}</p>

          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
