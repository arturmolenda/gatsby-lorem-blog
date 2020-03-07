const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(
    "./src/components/templates/articlesPage.js"
  )
  const articlesPagination = path.resolve(
    "./src/components/templates/articlesPagination.js"
  )
  const categoryTemplate = path.resolve(
    "./src/components/templates/categoryPage.js"
  )
  const categoryPagination = path.resolve(
    "./src/components/templates/articlesPaginationByCategory.js"
  )
  const res = await graphql(`
    query {
      post: allContentfulBlogPost {
        totalCount
        edges {
          node {
            slug
            category
          }
        }
      }
      webDevCount: allContentfulBlogPost(
        filter: { category: { eq: "Web Development" } }
      ) {
        totalCount
      }
      healthCount: allContentfulBlogPost(
        filter: { category: { eq: "Health" } }
      ) {
        totalCount
      }
      travelCount: allContentfulBlogPost(
        filter: { category: { eq: "Travel" } }
      ) {
        totalCount
      }
      cultureCount: allContentfulBlogPost(
        filter: { category: { eq: "Culture" } }
      ) {
        totalCount
      }
    }
  `)

  // Create page for each post
  res.data.post.edges.forEach(edge => {
    createPage({
      component: articleTemplate,
      path: `/article/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        category: edge.node.category,
      },
    })
  })

  // Pages to display max 15 articles per page
  const totalOfPages = Math.ceil(res.data.post.totalCount / 15)
  let pagesArray = []
  for (let i = 2; i <= totalOfPages; i++) {
    pagesArray.push(i)
  }
  pagesArray.forEach(number => {
    createPage({
      component: articlesPagination,
      path: `/articles/page/${number}`,
      context: {
        pagesCount: (number - 1) * 15,
      },
    })
  })

  // Pages for sorting by category
  const { webDevCount, healthCount, travelCount, cultureCount } = res.data
  const categories = [
    { slug: "web-development", articlesCount: webDevCount.totalCount },
    { slug: "culture", articlesCount: cultureCount.totalCount },
    { slug: "health", articlesCount: healthCount.totalCount },
    { slug: "travel", articlesCount: travelCount.totalCount },
  ]

  categories.forEach(category => {
    let categoryName = category.slug
    if (category.slug === "web-development") categoryName = "Web Development"
    else categoryName = categoryName[0].toUpperCase() + categoryName.slice(1)
    createPage({
      component: categoryTemplate,
      path: `/articles/category/${category.slug}`,
      context: {
        category: categoryName,
        slug: category.slug,
      },
    })
    // Count how many {category}/page/{number} there have to be for each category
    const totalOfPages = Math.ceil(category.articlesCount / 15)
    let pagesArray = []
    for (let i = 2; i <= totalOfPages; i++) {
      pagesArray.push(i)
    }
    if (pagesArray.length !== 0) {
      pagesArray.forEach(number => {
        createPage({
          component: categoryPagination,
          path: `/articles/category/${category.slug}/page/${number}`,
          context: {
            pagesCount: (number - 1) * 15,
            category: categoryName,
            slug: category.slug,
          },
        })
      })
    }
  })
}
