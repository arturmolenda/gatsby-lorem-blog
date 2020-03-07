import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardList from "../components/articles/cardList"
import Pagination from "../components/UI/pagination.js"

const Articles = () => {
  // Get all articles, limit 15 per page
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        limit: 15
        sort: { fields: publishedDate, order: DESC }
      ) {
        totalCount
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMM Do YYYY")
            author
            id
            category
            thumbnail {
              fluid(maxWidth: 700) {
                src
              }
            }
            shortDescription
          }
        }
      }
    }
  `)
  const totalCount = data.allContentfulBlogPost.totalCount
  return (
    <Layout>
      <SEO title="Articles" customLayout={"articles-layout"} />
      <CardList articles={data.allContentfulBlogPost.edges} />

      {totalCount > 15 && (
        <Pagination onlyNextBtn={true} prevBtn={false} preSlug="/articles" />
      )}
    </Layout>
  )
}

export default Articles
