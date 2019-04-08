import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero/Hero';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Lithuania from '../components/Map/Lithuania';
import Typography from '@material-ui/core/Typography/Typography';

const IndexPage = () => (
  <React.Fragment>
    <link href="https://fonts.googleapis.com/css?family=Baloo+Thambi" rel="stylesheet"/>
    <div style={{ fontFamily: "Baloo Thambi, cursive" }}>
      <Navigation/>
      <Hero/>
      <Layout>
        <SEO title="Produktai Luks" keywords={[`sukrės`, `žvejyba`, `žvejybos prekės`, `sukrė`, `sukre`]}/>
        <br/>
        <Typography align={'center'} variant={'h4'}>Mūsų produktus galite rasti parduotuvėse:</Typography>
        <br/>
        <div style={{margin: '0 auto', width: 'fit-content'}}>
          <Lithuania />
        </div>
        <br/>
      </Layout>
      <Footer/>
    </div>
  </React.Fragment>
);

export default IndexPage;
