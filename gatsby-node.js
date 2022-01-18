exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              title
            }
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.edges.forEach((edge) => {
    const title = edge.node.fields.title;
    actions.createPage({
      path: title,
      component: require.resolve(`./src/templates/item-page.jsx`),
      context: { title: title },
    });
  });
};
