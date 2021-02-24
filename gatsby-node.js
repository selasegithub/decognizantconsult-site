/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// gatsby-node.js
const createPages = require("./create/createPages")
const createPosts = require("./create/createPosts")
//const createUsers = require("./utils/createUsers")
//const createCategories = require("./utils/createCategories")
//const createTags = require("./utils/createTags")
 
 exports.createPagesStatefully = async ({ graphql, actions, reporter }, options) => {
  await createPages({ actions, graphql, reporter }, options)
  await createPosts({ actions, graphql, reporter }, options)
  //await createUsers({ actions, graphql, reporter }, options)
  //await createCategories({ actions, graphql, reporter }, options)
  //await crateTags({ actions, graphql, reporter }, options)
 }