import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Layout from "../layout"
import SEO from "../seo"
import CardList from "../articles/cardList"
import Pagination from "../UI/pagination"

// Template for displaying multiple pages for all the content eg. articles/page/{number}

export const query = graphql`
  query($pagesCount: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      skip: $pagesCount
      limit: 15
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
          title={`Articles Page ${currentPage}`}
          customLayout={"articles-layout"}
        />
        <CardList
          articles={props.data.allContentfulBlogPost.edges}
          allActive={true}
        />
        <Pagination
          currentPage={currentPage}
          totalCount={props.data.allContentfulBlogPost.totalCount}
          onlyNextBtn={false}
          prevBtn={true}
          preSlug="/articles"
        />
      </Layout>
    </Fragment>
  )
}

export default ArticlesPagination
