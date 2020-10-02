import { graphql } from 'gatsby';

// const imageQuery = graphql`
//   query {
//     rfqa: file(relativePath: { eq: "rfqa.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 300, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     wfp: file(relativePath: { eq: "wfp.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 300, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     shogun: file(relativePath: { eq: "shogun.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 300, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     usc: file(relativePath: { eq: "usc.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 300, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     marvis: file(relativePath: { eq: "marvis.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 300, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     sorry: file(relativePath: { eq: "sorry.jpeg" }) {
//       childImageSharp {
//         fluid(maxWidth: 300, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     moneytrees: file(relativePath: { eq: "moneytrees.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 300, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

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