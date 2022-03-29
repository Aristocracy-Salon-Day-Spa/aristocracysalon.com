import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Row = function ({ children, classes }) {
  const variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0,
      },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);
  return (
    <motion.div
      className={classes}
      ref={ref}
      variants={variants}
      initial="initial"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

Row.defaultProps = {
  classes: ``,
};

Row.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Row;
