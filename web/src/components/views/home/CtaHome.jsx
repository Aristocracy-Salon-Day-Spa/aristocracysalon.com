import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Button } from '../..';
import { useSanity } from '../../../hooks';

const CtaHome = function () {
  const data = useStaticQuery(graphql`
    query CtaHomeQ {
      imgCta: file(
        relativePath: {
          eq: "assets/images/home/staffing-request-talent-send-resume-engineering-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const { primary, secondary, accent, neutral, hero } = useSanity();
  const imgCta = data.imgCta.childImageSharp.gatsbyImageData;

  const variants = {
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
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0 }}
      className="relative bg-zinc-800"
    >
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
      >
        <GatsbyImage
          image={imgCta}
          className="w-full h-full object-cover"
          alt="Gardening services, planting flowers by Braven Landscape & Construction"
        />
      </motion.div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:ml-auto md:w-1/2 md:pl-10"
        >
          <h3 className="text-base font-semibold uppercase tracking-wider text-zinc-300">
            Professional Recruitment
          </h3>
          <h2 className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Staff Your Organization Today
          </h2>
          <div className="space-y-6 mt-6">
            <p className="text-lg text-zinc-300">
              All-Star Connections prides itself on being leaders when it comes
              to helping companies like yours find people who are great culture
              fits, specifically tailored to your needs.
            </p>
            <p className="text-lg text-zinc-300">
              We know that finding the right type of employee can be an
              expensive and time consuming process but we try to make it as easy
              as possible so you can get back to what's important, running your
              business!
            </p>
          </div>
          <div className="mx-auto lg:mx-none mt-12 flex justify-center lg:justify-start rounded-md shadow">
            <Button linkType="internal" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CtaHome;
