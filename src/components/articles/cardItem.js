import React from "react"
import { Link } from "gatsby"

import "./cardItem.scss"

const CardItem = props => {
  // Determines class name for big cards
  const checkIfCardIsBig = () => {
    ;[bigCardLeft, bigCardRight, mdCardRight, mdCardLeft].forEach(element => {
      if (!element === false && !cardClassName) cardClassName = element
      else if (!element === false && cardClassName.length !== 0)
        cardClassName = `${cardClassName} ${element}`
      else if (!element === true && !cardClassName) {
        cardClassName = "card-container"
      }
    })
    return
  }
  const {
    slug,
    title,
    text,
    author,
    img,
    date,
    category,
    bigCardLeft,
    bigCardRight,
    mdCardLeft,
    mdCardRight,
  } = props

  let cardClassName
  checkIfCardIsBig()

  return (
    <div className={cardClassName}>
      <Link to={`/article/${slug}`} className="card-link-container">
        <div
          className="card-img"
          style={{ backgroundImage: `url(${img})` }}
          alt={title}
        />
        <div className="card-content">
          <p className="category">{category}</p>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {text.length < 38 ? text : `${text.substring(0, 38)}...`}
          </p>
          <div className="card-info">
            By <span className="author">{author}</span> |{" "}
            <span className="date">{date}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardItem
