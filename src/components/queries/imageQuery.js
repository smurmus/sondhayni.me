import { graphql } from 'gatsby';

const imageQuery = graphql`
  query Images {
    RFQA: file(relativePath: { eq: "rfqa-r.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    WFP: file(relativePath: { eq: "maano-r.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    shogun: file(relativePath: { eq: "shogun-r.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    usc: file(relativePath: { eq: "usc-r.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default imageQuery;