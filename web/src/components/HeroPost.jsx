import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import { Button } from '.';

const HeroPost = function ({
  imgHeroBg,
  altText,
  headerText,
  authorName,
  tags,
  tagTitle,
  publishedAt,
}) {
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
    <div className="relative flex flex-col place-content-center place-items-center lg:h-screen">
      <div className="absolute inset-0">
        <GatsbyImage
          image={imgHeroBg}
          className="w-full h-full object-cover"
          alt={altText}
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-zinc-600"
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
        />
      </div>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0 }}
        className="relative mx-auto text-center max-w-4xl mt-24 px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.h1
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight text-sky-50 sm:text-5xl lg:text-6xl drop-shadow-darker"
        >
          {headerText}
        </motion.h1>
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-10 text-xl drop-shadow-darker mx-auto text-center text-white"
        >
          <p className="font-semibold">{authorName}</p>
          <p className="px-3 text-accent">•</p>

          {/* {tags.map((tag) => (
                <div>
                  <p className="text-white">
                    <span className="bg-accent font-semibold py-1 px-5 rounded-full">
                      {tagTitle}
                    </span>
                  </p>
                </div>
              ))} */}

          <p>{publishedAt}</p>
        </motion.div>
        {/* <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex mt-10"
        >
          <div className="col-1 gap-4 mx-auto">
            <Button linkType="internal" jumpLink={anchor} />
          </div>
        </motion.div> */}
      </motion.div>
    </div>
  );
};

HeroPost.defaultProps = {
  imgHeroBg: `data.imgHeroBg.childImageSharp.gatsbyImageData`,
  altText: `All-Star Connections Engineering Recruitment and Staffing`,
  headerText: `HEADER MUST BE UPDATED`,
  subheaderText: `SUBHEADER MUST BE UPDATED`,
};

HeroPost.propTypes = {
  imgHeroBg: PropTypes.string,
  altText: PropTypes.string,
  headerText: PropTypes.string,
  subheaderText: PropTypes.string,
};

export default HeroPost;
