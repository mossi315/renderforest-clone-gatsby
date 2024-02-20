import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentPreviews from '../components/ContentPreviews';
import ContentSolutions from '../components/ContentSolutions';
import Badges from '../components/Badges';
import ContentAchievements from '../components/ContentAchievements';
import Products from '../components/Products';
import SEO from '../components/SEO';

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <main>
        <Hero />
        <Products />
        <ContentPreviews />
        <ContentSolutions />
        <Badges />
        <ContentAchievements />
      </main>
    </Layout>

  )
}

export default Index