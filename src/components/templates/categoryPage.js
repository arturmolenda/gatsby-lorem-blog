import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Layout from "../layout"
import SEO from "../seo"
import CardList from "../articles/cardList"
import Pagination from "../UI/pagination"

// Template for displaying only page No. 1 for each category

export const query = graphql`
  query($category: String!) {
    allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      filter: { category: { eq: $category } }
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

const Blogs = props => {
  return (
    <Fragment>
      <Layout>
        <SEO
          title={props.pageResources.json.pageContext.category}
          customLayout={"articles-layout"}
        />
        <CardList
          articles={props.pageResources.json.data.allContentfulBlogPost.edges}
        />
        {props.pageResources.json.data.allContentfulBlogPost.totalCount >
          15 && (
          <Pagination
            onlyNextBtn={true}
            prevBtn={true}
            preSlug={`/articles/category/${props.pageContext.slug}`}
          />
        )}
      </Layout>
    </Fragment>
  )
}

export default Blogs
