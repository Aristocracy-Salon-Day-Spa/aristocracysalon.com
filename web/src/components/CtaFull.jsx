import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  Section,
  Container,
  Grid,
  Col,
  SanityBlockContent,
  Button,
  Overlay,
} from '.';
import { useSanity } from '../hooks';

// const StyledSection = styled((props) => <Section {...props} />)`
//   background-color: ${({ bgColor }) => bgColor};
// `;

// const StyledGrid = styled((props) => <Grid {...props} />)`
//   background-color: ${(props) => props.$bgColor};
// `;

// const StyledCol = styled((props) => <Col {...props} />)`
//   order: ${(props) => props.$classes};
// `;

const StyledHeadline = styled.span`
  color: #fff !important;
  &:hover {
    color: #ggg !important;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  color: ${(props) => props.$$color} !important;
  &:hover {
    color: ${(props) => props.$$colorHover} !important;
  }
`;

const CtaFull = ({
  block,
  raw,
  index,
  headline,
  subheadline,
  tagline,
  _rawDescription,
  image,
  ctaButtonLabel,
  ctaButtonLink,
}) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  const variants = {
    hidden: { opacity: 0, scale: 0.8, x: -100 },
    visible: { opacity: 1, scale: 1, x: 0 },
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
    <Section padding="none" h2Color={hero.headline.color}>
      <Container padding="none">
        <Container padding="none" classes="absolute inset-0">
          <GatsbyImage
            image={image?.asset?.gatsbyImageData}
            className="w-full h-full object-cover object-center"
            alt={image?.alt}
            loading="lazy"
          />
          <Overlay overlay={hero.overlay.color} />
        </Container>
        <div className="relative max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <motion.h2
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            className="max-w-3xl mx-auto text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-darker capitalize"
          >
            {headline}
          </motion.h2>
          <motion.p
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-3xl font-semibold text-white max-w-3xl mx-auto drop-shadow-darker"
          >
            {subheadline}
          </motion.p>
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            className="flex mt-10"
          >
            <div className="col-1 gap-4 mx-auto">
              <Button
                linkType="internal"
                internalLink={ctaButtonLink.metadata.slug.current}
                label={ctaButtonLabel}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
    // <Section padding="none" $bgColor={neutral.dark.color}>
    //   <Container padding="none">
    //     <Grid classes="lg:grid-cols-2 gap-0">
    //       <Col classes="">
    //         <GatsbyImage
    //           image={image?.asset?.gatsbyImageData}
    //           className="aspect-w-12 aspect-h-7 w-full h-full object-cover object-center"
    //           alt={image?.alt}
    //           loading="lazy"
    //         />
    //       </Col>
    //       <Col classes="px-4 py-12 lg:py-16">
    //         <div className="md:ml-auto md:pl-10">
    //           <h3 className="text-base font-semibold uppercase tracking-wider !text-zinc-300">
    //             {tagline}
    //           </h3>
    //           <h2 className="mt-2 !text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
    //             {headline}
    //           </h2>
    //           <div className="!text-zinc-300 space-y-6 mt-6">
    //             <SanityBlockContent blocks={raw.description} />
    //           </div>
    //           <div className="mx-auto lg:mx-none mt-12 flex justify-center lg:justify-start rounded-md drop-shadow">
    //             <Button linkType="internal" />
    //           </div>
    //         </div>
    //       </Col>
    //     </Grid>
    //   </Container>
    // </Section>
  );
};

export default CtaFull;
