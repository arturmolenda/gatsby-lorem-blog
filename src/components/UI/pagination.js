import React from "react"
import { Link } from "gatsby"
import "./pagination.scss"

const pagination = props => {
  const { onlyNextBtn, prevBtn, totalCount, preSlug, currentPage } = props

  const pagesCount = Math.ceil(totalCount / 15)

  // Check what slug should be displayed when going back to first page or descending page
  const prevPageSlug =
    currentPage === 2
      ? preSlug
      : preSlug === "/articles"
      ? `${preSlug}/page/${currentPage - 1}`
      : `${preSlug}/page/${currentPage - 1}`

  // Check if it's first page | only Next button
  if (onlyNextBtn) {
    return (
      <div className="pagination-container">
        <Link to={`${preSlug}/page/2`}>
          <div className="pagination-btn">
            <p>Next</p>
          </div>
        </Link>
      </div>
    )
  }

  // Check if need to show both buttons
  else if (prevBtn && currentPage < pagesCount) {
    return (
      <div className="pagination-container">
        <Link to={prevPageSlug}>
          <div className="pagination-btn">
            <p>Prev</p>
          </div>
        </Link>
        <Link to={`${preSlug}/page/${currentPage + 1}`}>
          <div className="pagination-btn">
            <p>Next</p>
          </div>
        </Link>
      </div>
    )
  }
  // Check if need to show only Previous button
  else {
    return (
      <div className="pagination-container">
        <Link to={prevPageSlug}>
          <div className="pagination-btn">
            <p>Prev</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default pagination
