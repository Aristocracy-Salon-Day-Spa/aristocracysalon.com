import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection } from './styles/Section.styled';

const Section = function ({
  padding,
  children,
  classes,
  idName,
  bgColor,
  h2Color,
  h3Color,
}) {
  switch (padding) {
    case 'lg':
      return (
        <StyledSection
          $bgColor={bgColor}
          $h2Color={h2Color}
          $h3Color={h3Color}
          className={`relative py-24 ${classes}`}
          id={idName}
        >
          {children}
        </StyledSection>
      );
    case 'sm':
      return (
        <StyledSection
          $bgColor={bgColor}
          $h2Color={h2Color}
          $h3Color={h3Color}
          className={`relative py-8 ${classes}`}
          id={idName}
        >
          {children}
        </StyledSection>
      );
    case 'top':
      return (
        <StyledSection
          $bgColor={bgColor}
          $h2Color={h2Color}
          $h3Color={h3Color}
          className={`relative pt-24 ${classes}`}
          id={idName}
        >
          {children}
        </StyledSection>
      );
    case 'bottom':
      return (
        <StyledSection
          $bgColor={bgColor}
          $h2Color={h2Color}
          $h3Color={h3Color}
          className={`relative pb-24 ${classes}`}
          id={idName}
        >
          {children}
        </StyledSection>
      );
    case 'none':
      return (
        <StyledSection
          $bgColor={bgColor}
          $h2Color={h2Color}
          $h3Color={h3Color}
          className={`relative py-0 ${classes}`}
          id={idName}
        >
          {children}
        </StyledSection>
      );
    default:
      return (
        <StyledSection
          $bgColor={bgColor}
          $h2Color={h2Color}
          $h3Color={h3Color}
          className={`relative py-24 ${classes}`}
          id={idName}
        >
          {children}
        </StyledSection>
      );
  }
};

Section.defaultProps = {
  padding: `lg`,
  classes: ``,
};

Section.propTypes = {
  padding: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
