import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useSanity } from '../hooks';
import { SanityBlockContent, Button, FormHero, Grid, Flex, Overlay } from '.';

const StyledHeroHeadline = styled(motion.h1)`
  color: ${(props) => props.$headline};
`;

const StyledHeroSubheadline = styled(motion.p)`
  color: ${(props) => props.$subheadline};
`;

const HeroForm = ({ block, raw, index, headline, bgImg }) => {
  // const { headline, bgImg, alt } = block;

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

  const { info, colors, hero } = useSanity();

  return (
    <div className="relative flex flex-col place-content-center place-items-center lg:h-screen">
      <div className="absolute inset-0">
        <GatsbyImage
          image={bgImg?.asset?.gatsbyImageData}
          alt={bgImg.alt}
          className="w-full h-full object-cover"
        />
        <Overlay overlay={hero.overlay.color} />
      </div>
      <Grid classes="lg:grid-cols-2 gap-4 max-w-7xl mx-auto mt-16 lg:mt-32 py-12 lg:py-24">
        <Flex classes="flex-col justify-center relative text-center lg:text-left pt-5 pb-5 px-4 sm:pt-10 sm:pb-12 sm:px-6 lg:px-8">
          <StyledHeroHeadline
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-5xl font-extrabold tracking-tight drop-shadow-text-darker sm:text-5xl lg:text-6xl capitalize mb-10"
            $headline={hero.headline.color}
          >
            {headline}
          </StyledHeroHeadline>
          <StyledHeroSubheadline
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl lg:text-2xl max-w-3xl drop-shadow-darker space-y-6"
            $subheadline={hero.tagline.color}
          >
            <SanityBlockContent blocks={raw.tagline} />
          </StyledHeroSubheadline>
          {/* <motion.div
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
            <div className="mx-auto lg:mx-0 max">
              <Button linkType="internal" />
            </div>
          </motion.div> */}
        </Flex>
        <Flex classes="flex-col justify-center relative mx-auto lg:max-w-lg">
          <div className="overflow-hidden">
            <FormHero />
          </div>
        </Flex>
      </Grid>
    </div>
  );
};

export default HeroForm;
