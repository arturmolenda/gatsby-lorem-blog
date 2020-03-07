import React from "react"
import "./otherArticles.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

// Displays latest articles on the right side of the article

const OtherArticles = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        limit: 4
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMM Do YYYY")
            author
            id
            thumbnail {
              fluid(maxWidth: 700) {
                src
              }
            }
          }
        }
      }
    }
  `)
  const { currentSlug } = props
  let count = 0
  return (
    <div className="articles-absolute">
      <div className="articles-wrap">
        <h1 className="content-title">Check out other latest articles</h1>
        {/* eslint-disable-next-line */}
        {data.allContentfulBlogPost.edges.map(article => {
          // Displays 3 latest articles, below is check to make sure not to display current article
          if (currentSlug !== article.node.slug && count !== 3) {
            count += 1
            return (
              <Link to={`/article/${article.node.slug}`} key={article.node.id}>
                <div className="container-wrap">
                  <div className="image">
                    <img src={article.node.thumbnail.fluid.src} alt="" />
                  </div>
                  <div className="content">
                    <div className="title">{article.node.title}</div>
                    <div className="post-details">
                      By <span className="author">{article.node.author}</span>{" "}
                      <span className="date">{article.node.publishedDate}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}

export default OtherArticles
