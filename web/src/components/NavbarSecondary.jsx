import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/FontAwesomeIconLibrary';

import { AnchorText, Section, Container, Flex } from '.';
import { useSanity } from '../hooks';

const StyledContactLinks = styled.a`
  & i {
    color: ${(props) => props.$iconColor};
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.$iconColorHover};
      transition: all 0.25s;
    }
  }
  & span {
    color: ${(props) => props.$textColor};
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.$textColorHover};
      transition: all 0.25s;
    }
  }
`;

const StyledSocialLinks = styled.a`
  & path {
    color: ${(props) => props.$iconColor};
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.$iconColorHover};
      transition: all 0.25s;
    }
  }
  & span {
    color: ${(props) => props.$textColor};
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.$textColorHover};
      transition: all 0.25s;
    }
  }
`;

const NavbarSecondary = function () {
  const { navbars, primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <Section
      padding="none"
      classes="hidden lg:block z-50 w-full"
      bgColor={primary.darker.color}
    >
      <Container padding="sm" classes="max-w-7xl px-4">
        <Flex classes="justify-end align-items-center h-12">
          {navbars.map((item) =>
            item.contactLinks.map((contact) => (
              <Flex key={contact.id} classes="my-auto px-6">
                <StyledContactLinks
                  $iconColor={accent.default.color}
                  $iconColorHover={accent.dark.color}
                  $textColor={neutral.white.color}
                  $textColorHover={accent.dark.color}
                  href={contact.url}
                  target="_blank"
                  rel="noopener"
                >
                  <i className={`${contact.icon} mr-3`} />
                  <span className="text-md font-thin">{contact.anchor}</span>
                </StyledContactLinks>
              </Flex>
            ))
          )}
          {navbars.map((item) =>
            item.socialLinks.map((social) => (
              <Flex key={social._id} classes="my-auto pl-3">
                <StyledSocialLinks
                  $iconColor={accent.default.color}
                  $iconColorHover={accent.dark.color}
                  $textColor={neutral.white.color}
                  $textColorHover={accent.dark.color}
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                >
                  <FontAwesomeIcon
                    className="!text-2xl"
                    icon={['fab', social.icon]}
                  />
                  <span className="text-md font-thin sr-only">
                    {social.anchor}
                  </span>
                </StyledSocialLinks>
              </Flex>
            ))
          )}
        </Flex>
      </Container>
    </Section>
  );
};

export default NavbarSecondary;
