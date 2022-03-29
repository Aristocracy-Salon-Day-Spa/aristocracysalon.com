import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useSanity } from '../hooks';

import { SanityBlockContent, Button, Grid, Flex, Overlay } from '.';

const StyledHeroHeadline = styled(motion.h1)`
  color: ${(props) => props.$headline};
`;

const StyledHeroSubheadline = styled(motion.p)`
  color: ${(props) => props.$subheadline};
`;

const StyledTestimonial = styled(motion.div)`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
`;

const Hero = ({ block, raw, index, headline, bgImg, testimonial }) => {
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

  const { info, colors, hero, primary } = useSanity();

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
            className="text-5xl font-extrabold tracking-tight drop-shadow-darker sm:text-5xl lg:text-6xl mb-10"
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
            <div className="mx-auto lg:mx-0">
              <Button linkType="internal" />
            </div>
          </motion.div>
        </Flex>
        <Flex classes="p-8">
          <div className="relative lg:flex lg:items-center">
            <div className="relative lg:ml-10">
              <StyledTestimonial
                $bgColor={primary.darker.color}
                $color={primary.lighter.color}
                className="bg-opacity-80 overflow-hidden rounded-2xl shadow-2xl z-10 p-8 lg:p-10"
              >
                <svg
                  className="absolute top-3 left-3 lg:top-5 lg:left-5 h-16 w-16 text-indigo-200 opacity-50"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 144 144"
                  aria-hidden="true"
                >
                  <path
                    strokeWidth={2}
                    d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                  />
                </svg>
                <blockquote className="relative">
                  <div className="text-lg leading-9 font-normal text-zinc-100">
                    <SanityBlockContent
                      blocks={testimonial._rawQuote}
                      className="space-y-6 italic"
                    />
                  </div>
                  <footer className="mt-8">
                    <Grid classes="grid-cols-12 gap-x-2 content-center">
                      <div className="col-span-3 lg:col-span-2 mr-3">
                        <GatsbyImage
                          image="../assets/images/testimonials/kate-linkedin-5-star-review-engineering-job-recruiter-agency-all-star-connections.jpg"
                          // image={testimonial.authorImg?.asset?.gatsbyImageData}
                          alt="Test"
                          // alt={testimonial.authorImg.alt}
                          className="w-full h-full rounded-full"
                        />
                      </div>
                      <div className="col-span-9 lg:col-span-10 flex flex-col justify-center">
                        <div className="text-base font-bold">
                          {testimonial.author}
                        </div>
                        <div className="text-base font-medium text-zinc-50">
                          {testimonial.info}
                        </div>
                      </div>
                    </Grid>
                  </footer>
                </blockquote>
              </StyledTestimonial>
            </div>
          </div>
        </Flex>
      </Grid>
    </div>
  );
};

export default Hero;
