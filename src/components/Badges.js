import React from 'react';
import Badge from './Badge';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
{
    allContentfulBadges {
      nodes {
        id
        badge
        badgeLink
      }
    }
  }`

const Badges = () => {
    const data = useStaticQuery(query);
    const badges = data.allContentfulBadges.nodes;
  return (
    <div className='text-center mt-4 lead text-muted'>
      <h1 className='mb-4'>Join Millions of Users to Save Time and Succeed!</h1>
      <Badge badges={badges} />
    </div>
  );
};

export default Badges;
