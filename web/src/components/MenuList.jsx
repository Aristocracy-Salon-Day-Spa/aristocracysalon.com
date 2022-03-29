/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  Section,
  Container,
  Col,
  Row,
  Grid,
  Flex,
  SanityBlockContent,
} from '.';
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

const MenuList = ({
  block,
  raw,
  index,
  headline,
  tagline,
  category,
  idName,
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
      idName={idName}
      padding="none"
      classes="pt-24 pb-8"
      bgColor={neutral.white.color}
      h2Color={neutral.darker.color}
      h3Color={secondary.dark.color}
    >
      <div className="space-y-32">
        {category.map((item) => (
          <Container
            key={item._key}
            classes="bg-zinc-100 p-3 lg:p-6 rounded-xl shadow-xl"
          >
            <h3 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-center">
              {item.headline}
            </h3>
            <div className="mt-5 max-w-prose mx-auto text-lg text-zinc-600 text-center">
              <SanityBlockContent blocks={item._rawDescription} />
            </div>
            <Grid classes="grid-cols-2 lg:grid-cols-4 gap-8 my-12">
              {item.images.map((image) => (
                <Col key={image._key}>
                  <GatsbyImage
                    image={image?.asset?.gatsbyImageData}
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                    alt={image?.alt}
                  />
                </Col>
              ))}
            </Grid>
            <Row classes="max-w-3xl mx-auto mb-6">
              {item.items.map((categoryItem) => (
                <Grid
                  key={categoryItem._key}
                  classes="grid-cols-12 gap-4 p-3 odd:bg-indigo-50 even:bg-zinc-50 rounded-lg border"
                >
                  <Col classes="text-left col-span-8">
                    <Flex classes="flex-col">
                      <p className="font-bold">{categoryItem.name}</p>
                      <div className="text-zinc-600">
                        <SanityBlockContent
                          blocks={categoryItem._rawDescription}
                        />
                      </div>
                    </Flex>
                  </Col>
                  <Col classes="text-right col-span-4">
                    <p className="font-medium">{categoryItem.price}</p>
                  </Col>
                </Grid>
              ))}
            </Row>
          </Container>
        ))}
      </div>
    </Section>
  );
};

export default MenuList;
