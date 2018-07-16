import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import styled from 'styled-components';

import { colors } from '../style-variables';
import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';

const Sc_ContentArea = styled.div`
  padding: 20px;
`;

injectGlobal`
  body {
    margin: 0;
    padding: 70px 0 0;
    font-size: 1rem	;
    font-family: Neucha, 'Helvetica Neue', Arial, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: ${colors.blue};
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  img {
    max-width: 100%;
  }
`;

const Layout = ({ children, data }) => {
  return (
    <div>
      <Head />
      <Header />
      <Sc_ContentArea>{children()}</Sc_ContentArea>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
