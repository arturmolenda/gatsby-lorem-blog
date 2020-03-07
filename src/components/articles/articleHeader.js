import React from "react"
import "./articleHeader.scss"

const ArticleHeader = props => {
  const { thumbnail, author, title, publishedDate, category } = props
  return (
    <div className="article-img-container">
      <div className="image card-img" alt={title}>
        <img src={thumbnail} alt="" />
      </div>
      <div className="content-wrap">
        <div className="content">
          <p className="category article-category">{category}</p>
          <div className="title">{title}</div>
          <div className="post-details">
            By <span className="author">{author}</span>{" "}
            <span className="date">{publishedDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleHeader
