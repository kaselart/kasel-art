const path = require("path");

const removeSpaces = (str) => {
  str = str.replace(/\s+/g, "");
  return str;
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.nodes.forEach((node) => {
    console.log(node);
    const title = removeSpaces(node.frontmatter.title);
    actions.createPage({
      path: "/" + title,
      component: path.resolve(`./src/templates/ItemPage.jsx`),
      context: { title: title },
    });
  });
};
