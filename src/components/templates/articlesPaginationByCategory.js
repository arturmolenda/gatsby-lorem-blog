import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Layout from "../layout"
import SEO from "../seo"
import CardList from "../articles/cardList"
import Pagination from "../UI/pagination"

// Template for displaying multiple pages for each category eg. category/health/page/{number}

export const query = graphql`
  query($pagesCount: Int!, $category: String!) {
    allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      skip: $pagesCount
      limit: 15
      filter: { category: { eq: $category } }
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
`

const ArticlesPagination = props => {
  const currentPage = props.pageContext.pagesCount / 15 + 1
  return (
    <Fragment>
      <Layout>
        <SEO
          title={props.pageContext.category + " Page " + currentPage}
          customLayout={"articles-layout"}
        />
        <CardList
          articles={props.data.allContentfulBlogPost.edges}
          categoryActive={props.pageContext.category}
        />
        <Pagination
          currentPage={currentPage}
          totalCount={props.data.allContentfulBlogPost.totalCount}
          onlyNextBtn={false}
          prevBtn={true}
          preSlug={`/articles/category/${props.pageContext.slug}`}
        />
      </Layout>
    </Fragment>
  )
}

export default ArticlesPagination
