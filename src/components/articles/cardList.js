import React from "react"
import { Link } from "gatsby"
import CardItem from "./cardItem"
import HeaderText from "../UI/headerText"
import "./cardList.scss"

const CardList = props => {
  let linkClassName = "category-link"
  return (
    <div className="grid">
      <HeaderText sectionTitle="Articles">
        <div className="articles-category">
          <Link
            to="/articles"
            className={
              props.allActive ? linkClassName + " link-active" : linkClassName
            }
          >
            all
          </Link>
          <Link
            to="/articles/category/web-development"
            className={
              props.categoryActive === "Web Development"
                ? linkClassName + " link-active"
                : linkClassName
            }
          >
            webDev
          </Link>
          <Link
            to="/articles/category/health"
            className={
              props.categoryActive === "Health"
                ? linkClassName + " link-active"
                : linkClassName
            }
          >
            health
          </Link>
          <Link
            to="/articles/category/culture"
            className={
              props.categoryActive === "Culture"
                ? linkClassName + " link-active"
                : linkClassName
            }
          >
            culture
          </Link>
          <Link
            to="/articles/category/travel"
            className={
              props.categoryActive === "Travel"
                ? linkClassName + " link-active"
                : linkClassName
            }
          >
            travel
          </Link>
        </div>
      </HeaderText>

      {props.articles.map((article, index) => {
        // Algorithm for determining which cards are supposed to be large for big screens and smaller

        // big screen === 1row -big - sm - sm | 2row -sm -sm -big > repeat
        // smaller screen === 1row -big -sm | -sm -big > repeat

        let bgCardL = "",
          bgCardR = "",
          mdCardL = "",
          mdCardR = ""
        if (index === 0) {
          bgCardL = "big-card-left"
          mdCardL = "mid-card-left"
        }
        if (index + 1 > 4 && (index + 1) % 6 === 1) bgCardL = "big-card-left"
        if (index + 1 > 4 && (index + 1) % 6 === 0) bgCardR = "big-card-right"
        if (index + 1 > 3 && (index + 1) % 4 === 1) mdCardL = "mid-card-left"
        if (index + 1 > 3 && (index + 1) % 4 === 0) mdCardR = "mid-card-right"
        return (
          <CardItem
            key={article.node.id}
            slug={article.node.slug}
            title={article.node.title}
            img={article.node.thumbnail.fluid.src}
            text={article.node.shortDescription}
            author={article.node.author}
            date={article.node.publishedDate}
            category={article.node.category}
            bigCardLeft={bgCardL}
            bigCardRight={bgCardR}
            mdCardLeft={mdCardL}
            mdCardRight={mdCardR}
          />
        )
      })}
    </div>
  )
}

export default CardList
