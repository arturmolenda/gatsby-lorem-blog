import React from "react"
import { Link } from "gatsby"
import "./home.scss"
const Home = () => {
  return (
    <div className="home-text">
      <div className="home-container">
        <h2>
          This site was created using Gatsby JS and Contentful cms for managing
          articles
        </h2>
        <h4>
          All the photos are from Pixabay and the body inside articles is just
          simple lorem ipsum hence the name of the blog
        </h4>
        <h4>
          Titles are from real articles so if any piqued your interest just
          google search for the title
        </h4>
        <div className="link-btn">
          <Link to="/articles">Head to articles</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
