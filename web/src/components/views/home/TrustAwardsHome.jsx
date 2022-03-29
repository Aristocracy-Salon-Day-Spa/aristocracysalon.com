import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TrustAwardsHome = function () {
  const data = useStaticQuery(graphql`
    query TrustAwardsHomeQ {
      imgAward: file(
        relativePath: {
          eq: "assets/graphics/2020-best-of-plymouth-ma-beauty-salon-aristocracy-salon-day-spa.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 150
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const imgAward = data.imgAward.childImageSharp.gatsbyImageData;

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
    <div className="bg-indigo-200 bg-opacity-25">
      <div className="max-w-4xl mx-auto py-10 lg:py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:block lg:flex flex-sm-none flex-lg-row justify-center">
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            className="pb-3 lg:pb-0 text-center text-lg-left"
          >
            <GatsbyImage
              image={imgAward}
              className="container mx-auto lg:mx-0"
              alt="Awards"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex-col mt-4 ml-0 lg:ml-8"
          >
            <h2 className="max-w-md mb-3 text-3xl font-extrabold text-indigo-800 lg:max-w-xl lg:text-left">
              Aristocracy Salon & Day Spa Receives{' '}
              <em className="text-yellow-600">2020 Best of Plymouth Award</em>
            </h2>
            <p className="text-zinc-500">
              "We are so honored and grateful to be selected by the Plymouth
              Awards Program in the category of Beauty Salon!"{' '}
              <em>- Amy Chapman, President</em>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrustAwardsHome;
