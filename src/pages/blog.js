import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
//import { StaticImage } from "gatsby-plugin-image";

import {
  articlesList,
  snippet,
  snippetImage,
  snippetTitle,
  snippetMeta,
} from "../components/layout.module.css";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <div className={articlesList}>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id} className={snippet}>
            <img src={node.frontmatter.image} alt="This is a test" className={snippetImage}/>
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
    </Layout>
  );
};

export const query = graphql
`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          author
          image
        }
        id
        body
        slug
        excerpt(pruneLength: 150)
      }
    }
  }
`;

export default BlogPage;
