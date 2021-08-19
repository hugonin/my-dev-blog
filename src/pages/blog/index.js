import * as React from "react";
import { Link, graphql } from "gatsby";
//import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  container,
  sectionTitle,
  textCenter,
  articlesList,
  snippet,
  snippetImage,
  snippetTitle,
  snippetMeta,
  btnPrimary
} from "../../components/layout.module.css";


const BlogPage = ({ data }) => {
  // const image = getImage(data.allMdx.frontmatter.hero_image)
  return (
    <Layout pageTitle="My Blog Posts">
     <section>
     <div className={container}>
        <h2 className={sectionTitle}>My Articles</h2>
        <p className={textCenter}>
           Below  are my articles!
          </p>
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
              <p>{node.excerpt}</p>
           
           
              <Link to={`/blog/${node.slug}`} className={btnPrimary}>
              Continue reading
            </Link>
            </article>
          ))}
        </div>
      </div>
     </section>
       
    
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
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        id
        slug
        excerpt(pruneLength: 200)
      }
    }
  }
`;

export default BlogPage;
