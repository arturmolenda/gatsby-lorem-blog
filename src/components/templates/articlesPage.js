import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Layout from "../layout"
import SEO from "../seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { DiscussionEmbed } from "disqus-react"
import ArticleHeader from "../articles/articleHeader"
import OtherArticles from "../articles/otherArticles"
import CardItem from "../articles/cardItem"
import "./article.scss"

// Template for displaying article itself

export const query = graphql`
  query($slug: String!, $category: String!) {
    blogPost: allContentfulBlogPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        slug
        publishedDate(formatString: "MMM Do YYYY")
        author
        category
        thumbnail {
          file {
            url
          }
        }
        body {
          json
        }
      }
    }
    moreArticles: allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      limit: 6
      filter: { category: { eq: $category } }
    ) {
      nodes {
        title
        slug
        publishedDate(formatString: "MMM Do YYYY")
        author
        category
        thumbnail {
          fluid(maxWidth: 700) {
            src
          }
        }
        shortDescription
        id
      }
    }
  }
`

const Blog = props => {
  const {
    title,
    publishedDate,
    slug,
    author,
    category,
    thumbnail: {
      file: { url },
    },
  } = props.data.blogPost.nodes[0]
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }
  // Sets display for images from contentful
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }
  return (
    <Fragment>
      <OtherArticles currentSlug={slug} />
      <Layout>
        <SEO title={title} customLayout={"custom-article-layout"} />
        <ArticleHeader
          title={title}
          publishedDate={publishedDate}
          thumbnail={url}
          author={author}
          category={category}
        />
        {documentToReactComponents(
          props.data.blogPost.nodes[0].body.json,
          options
        )}
        <DiscussionEmbed {...disqusConfig} />
        {props.data.moreArticles.nodes && (
          <Fragment>
            <h1>Related Articles</h1>
            <ul className="related-articles-wrap">
              {props.data.moreArticles.nodes.map(card => {
                return (
                  <CardItem
                    key={card.id}
                    slug={card.slug}
                    title={card.title}
                    img={card.thumbnail.fluid.src}
                    text={card.shortDescription}
                    author={card.author}
                    date={card.publishedDate}
                    category={card.category}
                  />
                )
              })}
            </ul>
          </Fragment>
        )}
      </Layout>
    </Fragment>
  )
}

export default Blog
