import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero/Hero';
import Navigation from '../components/Navigation/Navigation';
import AboutUs from '../components/AboutUs/AboutUs';
import FeaturedLinks from '../components/FeaturedLinks/FeaturedLinks';
import MediasGrid from '../components/MediasGrid/MediasGrid';
import Footer from '../components/Footer/Footer';

const IndexPage = () => (
  <React.Fragment>
    <link href="https://fonts.googleapis.com/css?family=Baloo+Thambi" rel="stylesheet"/>
    <div style={{ fontFamily: "Baloo Thambi, cursive" }}>
      <Navigation/>
      <Hero/>
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <br/>
        <AboutUs />
        <br/>
        <FeaturedLinks/>
        <br/>
        <MediasGrid/>
        <br/>
      </Layout>
      <Footer></Footer>
    </div>
  </React.Fragment>
);

export default IndexPage;
