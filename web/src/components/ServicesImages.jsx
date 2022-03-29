/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Section, Container, Col, Grid, SanityBlockContent } from '.';
import { useSanity } from '../hooks';

const StyledLink = styled((props) => <Link {...props} />)`
  background-color: ${(props) => props.$bgColor};
  &:hover {
    background-color: ${(props) => props.$bgColorHover};
  }
  & p {
    color: ${(props) => props.$textColor} !important;
    &:hover {
      color: ${(props) => props.$textColorHover} !important;
    }
  }
`;

// const StyledHeadline = styled.span`
//   color: #fff !important;
//   &:hover {
//     color: #ggg !important;
//   }
// `;

const ServicesImages = ({
  block,
  raw,
  index,
  headline,
  tagline,
  service,
  title,
  image,
  link,
}) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return (
    <Section
      type="my"
      bgColor={neutral.lighter.color}
      h2Color={neutral.darker.color}
      h3Color={secondary.dark.color}
    >
      <Container classes="max-w-md px-4 text-center sm:max-w-3xl lg:max-w-7xl">
        <h3 className="text-base font-semibold tracking-wider uppercase">
          {tagline}
        </h3>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {headline}
        </h2>
        <div className="mt-5 max-w-prose mx-auto text-xl text-zinc-600">
          <SanityBlockContent blocks={raw.description} />
        </div>
        <div className="mt-24">
          <Grid classes="gap-8 sm:grid-cols-2 lg:grid-cols-2 grid-flow-row auto-rows-fr">
            {service.map((item) => (
              <Col key={item._key} className="pt-6 h-full">
                <motion.div
                  ref={ref}
                  variants={itemVariants}
                  className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"
                >
                  <StyledLink
                    to={
                      item.link.metadata.slug.current === 'home'
                        ? '/'
                        : `/${item.link.metadata.slug.current}/`
                    }
                    className="relative py-24 px-4 rounded-xl shadow-2xl overflow-hidden lg:px-8 flex md:h-full lg:flex-col justify-between"
                    $bgColor={neutral.default.color}
                    $bgColorHover={neutral.dark.color}
                    $textColor={accent.default.color}
                    $textColorHover={accent.light.color}
                  >
                    <div className="absolute inset-0 opacity-90 filter saturate-90 mix-blend-multiply">
                      <GatsbyImage
                        image={item.image?.asset?.gatsbyImageData}
                        className="w-full h-full object-cover rounded-xl transition hover:scale-125"
                        alt={item.image?.alt}
                      />
                    </div>
                    <div className="relative z-10 m-auto text-center">
                      <h3 className="mx-auto mb-4 text-4xl font-bold px-3 lg:px-12">
                        <span className="drop-shadow-darker text-white">
                          {item.title}
                        </span>
                      </h3>

                      <p className="text-xl font-medium drop-shadow-text-dark">
                        <span className="drop-shadow-darker">Learn More</span>{' '}
                        <span aria-hidden="true">&rarr;</span>{' '}
                      </p>
                    </div>
                  </StyledLink>
                </motion.div>
              </Col>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesImages;
