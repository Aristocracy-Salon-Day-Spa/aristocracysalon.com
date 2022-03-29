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

const StyledHeroSubheadline = styled(motion.div)`
  color: ${(props) => props.$subheadline};
`;

const HeroGraphic = ({
  block,
  raw,
  index,
  headline,
  bgImg,
  graphic,
  primaryCtaButtonLabel,
  primaryCtaButtonLink,
  secondaryCtaButtonLabel,
  secondaryCtaButtonLink,
}) => {
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
            className="text-5xl font-extrabold tracking-tight drop-shadow-darker sm:text-5xl lg:text-6xl capitalize mb-10"
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
            className="text-xl lg:text-2xl max-w-3xl drop-shadow-darker space-y-6"
            $subheadline={hero.tagline.color}
          >
            <SanityBlockContent blocks={raw.tagline} />
          </StyledHeroSubheadline>
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
            <div className="mx-auto lg:mx-0 max">
              <Button
                linkType="internal"
                internalLink={primaryCtaButtonLink.metadata.slug.current}
                label={primaryCtaButtonLabel}
              />
            </div>
          </motion.div>
        </Flex>
        <Flex classes="flex-col justify-center relative mx-auto lg:max-w-lg">
          <div className="bg-blue-900 bg-opacity-75 p-6 rounded-2xl shadow-2xl space-y-6 mx-3 lg:mx-0">
            <div className="h-48 w-48 mx-auto">
              <GatsbyImage
                image={graphic?.asset?.gatsbyImageData}
                alt={graphic.alt}
                className="w-full h-full object-cover drop-shadow-darker"
              />
            </div>
            <div>
              <h2 className="max-w-md mb-3 text-2xl lg:text-3xl font-extrabold text-indigo-600 lg:max-w-xl text-center lg:text-center drop-shadow-darker">
                Aristocracy Salon & Day Spa
                <br />
                <span className="text-yellow-600">
                  2020 Best of Plymouth Award
                </span>
              </h2>
              <div className="pt-2 space-y-4">
                <p className="text-zinc-50 italic text-center lg:text-left drop-shadow-text-cta">
                  "We are so honored and grateful to be selected by the Plymouth
                  Awards Program in the category of Beauty Salon!"
                </p>
                <p className="text-zinc-50 italic  text-right font-bold">
                  - Amy Chapman, Owner
                </p>
              </div>
            </div>
          </div>
        </Flex>
      </Grid>
    </div>
  );
};

export default HeroGraphic;
