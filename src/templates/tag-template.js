import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const TagTemplate = ({pageContext}) => {
  return (
    <Layout>
      <SEO title={pageContext.tag}/>
      <section>
        <div className='container text-center mt-5 p-4'>
          <h1>
            {pageContext.tag}
          </h1>
        </div>
      </section>
    </Layout>
  )
}

export default TagTemplate