import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ContentPreview from './ContentPreview';
import { Container } from 'react-bootstrap';
const query = graphql`
{
    allContentfulProductContentPreview {
      nodes {
        id
        title
        description
        replaces
        video
      }
    }
  }`
const ContentPreviews = () => {
    const data = useStaticQuery(query);
    const contents = data.allContentfulProductContentPreview.nodes;

  return (
    <Container>
    <div className='lead text-muted'>
      <div className='text-center p-4 '>
        <h1>
        All your design tools in one place with one simple subscription
        </h1>
        <p>
        Your advanced marketing tool to save time, enhance your presence, and boost awareness.
        </p>
      </div>
      {contents.map(content => (
        <ContentPreview key={content.id} {...content} />
      ))}
    </div>
    </Container>
  )
}

export default ContentPreviews