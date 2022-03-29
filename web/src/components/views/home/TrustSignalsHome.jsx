import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TrustSignalsHome = function () {
  // const data = useStaticQuery(graphql`
  //   query TrustSignalsHomeQ {
  //     imgHeroBg: file(
  //       relativePath: {
  //         eq: "assets/images/home/about-mdh-construction-general-contractor-plymouth-ma.jpg"
  //       }
  //     ) {
  //       childImageSharp {
  //         fluid(quality: 90, maxWidth: 1920) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);

  // const imgHeroBg = data.imgHeroBg.childImageSharp.fluid;

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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-zinc-600 tracking-wider">
          We use only the industry's finest products because we believe that{' '}
          <em className="text-yellow-600">you deserve the best</em>.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <motion.div
            ref={ref}
            variants={itemVariants}
            className="col-span-1 flex justify-center py-8 px-8 bg-zinc-50"
          >
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-zinc-400.svg"
              alt="Workcation"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={itemVariants}
            className="col-span-1 flex justify-center py-8 px-8 bg-zinc-50"
          >
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-zinc-400.svg"
              alt="Mirage"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={itemVariants}
            className="col-span-1 flex justify-center py-8 px-8 bg-zinc-50"
          >
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-zinc-400.svg"
              alt="Tuple"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={itemVariants}
            className="col-span-1 flex justify-center py-8 px-8 bg-zinc-50"
          >
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/laravel-logo-zinc-400.svg"
              alt="Laravel"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={itemVariants}
            className="col-span-1 flex justify-center py-8 px-8 bg-zinc-50"
          >
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-zinc-400.svg"
              alt="StaticKit"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={itemVariants}
            className="col-span-1 flex justify-center py-8 px-8 bg-zinc-50"
          >
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/statamic-logo-zinc-400.svg"
              alt="Statamic"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustSignalsHome;
