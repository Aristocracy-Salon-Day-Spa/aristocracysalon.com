import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useSanitySettingsCompany from '../../../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../../../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../../../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../../../hooks/useSanitySettingsMetadata';

import Button from '../../common/Button';

const callOutSettings = {
  bgOverlay: 'bg-gray-500',
  bgImgAlt:
    'Front yard of home with walkway and patio, landscaping done by Braven Landscape & Construction in Plympton, MA',
};

const content = {
  headline: 'Scale Your San Diego Company With Top Talent',
  subHeadline: 'Give us a call at',
};

const CtaFullSanDiego = () => {
  const data = useStaticQuery(graphql`
    query CtaFullSanDiegoQ {
      imgCtaFullBg: file(
        relativePath: {
          eq: "assets/images/san-diego-ca/san-diego-ca-engineering-roles-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgCtaFullBg = data.imgCtaFullBg.childImageSharp.gatsbyImageData;

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const variants = {
    hidden: { opacity: 0, scale: 0.8, x: -100 },
    visible: { opacity: 1, scale: 1, x: 0 },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    //  <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="relative">
      <div className="absolute inset-0">
        <GatsbyImage
          image={imgCtaFullBg}
          className="w-full h-full object-cover"
          alt={callOutSettings.bgImgAlt}
        />
        <div
          className={`absolute inset-0 ${callOutSettings.bgOverlay}`}
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-4xl font-extrabold tracking-tight text-lightBlue-200 sm:text-5xl lg:text-6xl drop-shadow-darker capitalize"
        >
          {content.headline}
        </motion.h2>
        <motion.p
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-3xl font-semibold text-white max-w-3xl mx-auto drop-shadow-darker"
        >
          Schedule your free consultation by filling out our form.
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
            <Button type="internal" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CtaFullSanDiego;
