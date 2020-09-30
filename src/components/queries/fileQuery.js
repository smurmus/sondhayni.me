import { graphql } from 'gatsby';

const fileQuery = graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "docs" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `;

export default fileQuery;