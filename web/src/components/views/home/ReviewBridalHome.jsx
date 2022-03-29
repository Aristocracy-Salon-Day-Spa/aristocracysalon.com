import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ReviewBridalHome = function () {
  const data = useStaticQuery(graphql`
    query ReviewBridalHomeQ {
      imgReview: file(
        relativePath: {
          eq: "assets/images/home/wedding-bridal-packages-5-star-review-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgReview = data.imgReview.childImageSharp.gatsbyImageData;

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
      className="bg-white pt-16 lg:py-24"
    >
      <div className="pb-16 bg-secondary lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8 rounded-lg shadow-lg overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <motion.div
                ref={ref}
                variants={itemVariants}
                className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full"
              >
                <GatsbyImage
                  image={imgReview}
                  className="object-cover lg:h-full lg:w-full"
                  alt="Reviews"
                />
              </motion.div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <motion.div ref={ref} variants={itemVariants}>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                    I booked Aristocracy for the day of my wedding for myself,
                    mother, mother of the groom, and 7 bridesmaids for hair &
                    make up. The pricing is competitive and everyone looked so
                    amazingly beautiful! Customer service was great. Everyone
                    was also happy with their hair/make up, which is not easy to
                    do in such a big group! Alissa did my hair and Arianna? (I
                    keep forgetting her name, but she was amazing and wore
                    glasses, beautiful porcelain skin), did my make up and
                    everything was flawless. So good, one my of bridesmaids
                    booked them for her wedding this summer!!
                  </p>
                </motion.div>
                <div className="mt-6">
                  <p className="text-base font-medium text-white">
                    Kaitlynne Kelley
                  </p>
                  <div className="flex flex-row">
                    <span className="h-6 mt-3 text-center text-yellow-400">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="ml-3 text-base font-semibold text-indigo-100">
                        Google Review
                      </span>
                    </span>
                  </div>
                  {/* <p className="text-base font-medium text-indigo-100">
                    Plymouth, MA
                  </p> */}
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewBridalHome;
