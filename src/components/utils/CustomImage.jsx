import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Image({ src, alt }) {
  const { allImageSharp } = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        fluid(maxWidth: 1000, quality: 100) {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                }
            }
        }
    `);

  const image = allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === src
  );

  if (!image) {
    return null;
  }
  return <Img fluid={image.node.fluid} alt={alt} />;
}