import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero/Hero';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import ProductGrid from '../components/ProductGrid/ProductGrid';

const IndexPage = () => (
  <React.Fragment>
    <link href="https://fonts.googleapis.com/css?family=Baloo+Thambi" rel="stylesheet"/>
    <div style={{ fontFamily: "Baloo Thambi, cursive" }}>
      <Navigation/>
      <Hero/>
      <Layout>
        <SEO title="Kontaktai Luks" keywords={[`sukrės`, `žvejyba`, `žvejybos prekės`, `sukrė`, `sukre`]}/>
        <ProductGrid/>
      </Layout>
      <Footer/>
    </div>
  </React.Fragment>
);

export default IndexPage;
