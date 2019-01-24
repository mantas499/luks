import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero/Hero';
import Navigation from '../components/Navigation/Navigation';
import AboutUs from '../components/AboutUs/AboutUs';
import FeaturedLinks from '../components/FeaturedLinks/FeaturedLinks';
import BlogLinks from '../components/BlogLinks/BlogLinks';
import Social from '../components/Social/Social';
import MediasGrid from '../components/MediasGrid/MediasGrid';

const IndexPage = () => (
  <React.Fragment>
    <link href="https://fonts.googleapis.com/css?family=Baloo+Thambi" rel="stylesheet"/>
    <div style={{ fontFamily: "Baloo Thambi, cursive" }}>
      <Hero/>
      <Navigation/>
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <AboutUs />
        <FeaturedLinks/>
        <Social/>
        <BlogLinks/>
        <MediasGrid/>
      </Layout>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </React.Fragment>
);

export default IndexPage;
