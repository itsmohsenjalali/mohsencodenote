import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/layout'

const Notes = ({ data }) => {
  const notes = data.allMdx.edges
  const siteTitle = 'Znippets'
  return (
    <Fragment>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Layout>
        {notes.map(({ node }) => {
          const title = node.frontmatter.title
          const path = node.parent.name
          const modifiedDate = node.parent.ctime
          const tags = node.frontmatter.tags
          return (
            <article key={path}>
              <header>
                <h3>
                  <Link to={`/${path}`}>{title}</Link>
                </h3>
              </header>
              {modifiedDate}
              {tags && (
                <section>
                  <ul>
                    {tags.map((item, index) => (
                      <li key={index}>
                        <Link to={`/tag/${encodeURI(item.toLowerCase())}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </article>
          )
        })}
      </Layout>
    </Fragment>
  )
}

export default Notes

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          parent {
            ... on File {
              name
              ctime(formatString: "Do MMM YYYY")
            }
          }
        }
      }
    }
  }
`
