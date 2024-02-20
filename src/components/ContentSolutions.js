import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ContentSolution from '../components/ContentSolution';

const query = graphql`
  {
    allContentfulContentSolution {
      nodes {
        id
        problem
        solution
      }
    }
  }
`
const ContentSolutions = () => {
    const data = useStaticQuery(query)
  const contentSolutions = data.allContentfulContentSolution.nodes;

  return (
    <section className='shadow-sm container bg-light'>
      <div className='p-4'>
          <h1 className='text-center pb-4'>Maximize your results while minimizing constraints with our solutions</h1>
        {contentSolutions.map(({ id, problem, solution }) => (
          <ContentSolution key={id} problem={problem} solution={solution} />
        ))}
      </div>
    </section>
  );
};

export default ContentSolutions;
