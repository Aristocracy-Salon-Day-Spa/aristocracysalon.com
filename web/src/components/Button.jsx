import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { useSanity } from '../hooks';

const StyledButtonInternal = styled((props) => <Link {...props} />)`
  color: rgba(250, 250, 250) !important;
  background-color: ${(props) => props.$bgColor};
  &:hover {
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledButtonExternal = styled.a`
  color: rgba(250, 250, 250) !important;
  background-color: ${(props) => props.$bgColor};
  &:hover {
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledButtonForm = styled.button`
  background-color: ${(props) => props.$bgColor};
  &:hover {
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledAnchorLink = styled((props) => <AnchorLink {...props} />)`
  color: rgba(250, 250, 250);
  background-color: ${(props) => props.$bgColor};
  &:hover {
    color: ${(props) => props.$colorHover};
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const Button = function ({
  linkType,
  label,
  internalLink,
  externalLink,
  jumpLink,
  secondaryBtn,
}) {
  const { website, primary, secondary, accent, neutral, hero } = useSanity();

  switch (linkType === null || undefined ? 'internal' : linkType) {
    case 'internal':
      return (
        <StyledButtonInternal
          to={
            internalLink === null || undefined
              ? '/'
              : internalLink === 'home'
              ? '/'
              : `/${internalLink}/`
          }
          className="inline-flex items-center py-3 px-6 text-lg font-bold text-zinc-50 hover:text-white border border-zinc-50 hover:border-zinc-50 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 hover:-translate-y-0.5 translate transform transition-all"
          $bgColor={accent.default.color}
          $bgColorHover={accent.dark.color}
        >
          <span className="drop-shadow-text-cta">
            {label === null || undefined ? 'Call Now' : label}
          </span>
        </StyledButtonInternal>
      );
    case 'external':
      return (
        <StyledButtonExternal
          href={externalLink === null || undefined ? '#' : externalLink}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center py-3 px-6 text-lg font-bold text-zinc-50 hover:text-white border border-zinc-50 hover:border-zinc-50 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 hover:-translate-y-0.5 translate transform transition-all"
          secondaryBtn={
            secondaryBtn === null || undefined ? false : secondaryBtn
          }
          $bgColor={secondaryBtn ? 'transparent' : accent.default.color}
          $bgColorHover={
            secondaryBtn ? accent.default.color : accent.dark.color
          }
        >
          <span className="drop-shadow-text-cta">
            {label === null || undefined ? 'Call Now' : label}
          </span>
        </StyledButtonExternal>
      );
    case 'form':
      return (
        <StyledButtonForm
          type="submit"
          value="Submit"
          className="inline-flex items-center py-3 px-6 text-lg font-bold text-zinc-50 hover:text-white border border-zinc-50 hover:border-zinc-50 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 hover:-translate-y-0.5 translate transform transition-all"
          secondaryBtn={
            secondaryBtn === null || undefined ? false : secondaryBtn
          }
          $bgColor={secondaryBtn ? 'transparent' : accent.default.color}
          $bgColorHover={
            secondaryBtn ? accent.default.color : accent.dark.color
          }
        >
          <span className="drop-shadow-text-cta">
            {label === null || undefined ? 'Call Now' : label}
          </span>
        </StyledButtonForm>
      );
    case 'anchor':
      return (
        <StyledAnchorLink
          to={jumpLink === null || undefined ? '#' : jumpLink}
          className="inline-flex items-center py-3 px-6 text-lg font-bold text-zinc-50 hover:text-white border border-zinc-50 hover:border-zinc-50 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 hover:-translate-y-0.5 translate transform transition-all cursor-pointer"
          secondaryBtn={
            secondaryBtn === null || undefined ? false : secondaryBtn
          }
          $bgColor={secondaryBtn ? 'transparent' : accent.default.color}
          $bgColorHover={secondaryBtn ? accent.dark.color : accent.dark.color}
          $colorHover={secondaryBtn ? accent.default.color : accent.dark.color}
        >
          <span className="drop-shadow-text-cta">
            {label === null || undefined ? 'Call Now' : label}
          </span>
        </StyledAnchorLink>
      );
    default:
      return (
        <StyledButtonInternal
          to={
            internalLink === null || undefined
              ? '/'
              : internalLink === 'home'
              ? '/'
              : `/${internalLink}/`
          }
          className="inline-flex items-center py-3 px-6 text-lg font-bold text-zinc-50 hover:text-white border border-zinc-50 hover:border-zinc-50 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 hover:-translate-y-0.5 translate transform transition-all"
          $bgColor={accent.default.color}
          $bgColorHover={accent.dark.color}
        >
          <span className="drop-shadow-text-cta">
            {label === null || undefined ? 'Call Now' : label}
          </span>
        </StyledButtonInternal>
      );
  }
};

Button.defaultProps = {
  linkType: 'internal',
  label: 'Call Now',
  internalLink: 'home',
  externalLink: '#',
  jumpLink: '#',
  secondaryBtn: false,
};

Button.propTypes = {
  linkType: PropTypes.oneOf(['internal', 'external', 'form', 'anchor']),
  label: PropTypes.string,
  internalLink: PropTypes.string,
  externalLink: PropTypes.string,
  jumpLink: PropTypes.string,
  secondaryBtn: PropTypes.bool,
};

export default Button;
