import React from 'react';
import PropTypes from 'prop-types';
import { FooterWrapper } from './Footer.styles';

const Footer = props => (
  <FooterWrapper>
    This is a Footer
  </FooterWrapper>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
