import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "./speakers-template.css"

const SpeakersTemplate = ({ data }) => {
  const { speakers } = data.markdownRemark.frontmatter
  return (
    <div className="container">
      <div className="speaker-list">
        {speakers.map(speaker => {
          const { name, title, headshot } = speaker
          return (
            <div key={name}>
              <Img
                className="headshot"
                alt={name}
                fluid={headshot.childImageSharp.fluid}
              />
              <div className="info-container">
                <div>{name}</div>
                <div>{title}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpeakersTemplate

export const SpeakersQuery = graphql`
  query SpeakersQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        speakers {
          name
          title
          headshot {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
