import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NavHome = function () {
  const data = useStaticQuery(graphql`
    query NavHomeQ {
      imgAbout: file(
        relativePath: {
          eq: "assets/images/home/about-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 300
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
      imgServices: file(
        relativePath: {
          eq: "assets/images/home/hair-spa-eyelash-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 300
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
      imgGiftCard: file(
        relativePath: {
          eq: "assets/images/home/gift-card-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 300
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const imgAbout = data.imgAbout.childImageSharp.gatsbyImageData;
  const imgServices = data.imgServices.childImageSharp.gatsbyImageData;
  const imgGiftCard = data.imgGiftCard.childImageSharp.gatsbyImageData;

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
      className="relative bg-indigo-200 bg-opacity-25 py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <motion.div ref={ref} variants={itemVariants}>
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-5 mx-auto text-xl text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio
            ipsa harum, neque esse iste nam fugit ipsum, veniam vitae rem
            dignissimos nulla ad itaque distinctio repellat vero atque. Quidem.
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-base lead-7 text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            iste laboriosam, exercitationem sapiente eius nihil quidem unde
            dignissimos necessitatibus reprehenderit, animi possimus qui?
            Debitis ipsum quasi quam quis. Dolores, sed.
          </p>
        </motion.div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div ref={ref} variants={itemVariants} className="pt-6">
              <div className="flow-root bg-zinc-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-1 bg-indigo-400 rounded-md shadow-lg">
                      <GatsbyImage
                        image={imgAbout}
                        className="rounded-sm overflow-hidden"
                        alt="About"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-zinc-900 tracking-tight">
                    About Aristocracy
                  </h3>
                  <p className="mt-5 text-base text-zinc-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, modi accusamus dignissimos vel doloribus
                    blanditiis. Nostrum at veritatis, quis explicabo, excepturi
                    placeat aliquid quod ut dolorum reprehenderit cumque.
                    Magnam, ipsum.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/about/"
                      className="text-lg font-medium text-yellow-600 hover:text-yellow-500"
                    >
                      Learn more <span aria-hidden="true">&rarr;</span>{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div ref={ref} variants={itemVariants} className="pt-6">
              <div className="flow-root bg-zinc-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-1 bg-indigo-400 rounded-md shadow-lg">
                      <GatsbyImage
                        image={imgServices}
                        className="rounded-sm overflow-hidden"
                        alt="Services"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-zinc-900 tracking-tight">
                    See Our Services
                  </h3>
                  <p className="mt-5 text-base text-zinc-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam error beatae, tempora quis, facilis asperiores
                    possimus exercitationem cum optio aspernatur recusandae id
                    quas tempore officiis officia! Et accusantium quas
                    consequatur.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/services/"
                      className="text-lg font-medium text-yellow-600 hover:text-yellow-500"
                    >
                      Learn more <span aria-hidden="true">&rarr;</span>{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div ref={ref} variants={itemVariants} className="pt-6">
              <div className="flow-root bg-zinc-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-1 bg-indigo-400 rounded-md shadow-lg overflow-hidden">
                      <GatsbyImage
                        image={imgGiftCard}
                        className="rounded-sm overflow-hidden"
                        alt="Gift card"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-zinc-900 tracking-tight">
                    Buy A Gift Card
                  </h3>
                  <p className="mt-5 text-base text-zinc-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Doloremque excepturi, repellat itaque, amet voluptatem
                    laboriosam odio culpa dolorum quae obcaecati quas tenetur
                    modi quasi nemo nesciunt. Quia qui inventore doloribus?
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/gift-cards/"
                      className="text-lg font-medium text-yellow-600 hover:text-yellow-500"
                    >
                      Learn more <span aria-hidden="true">&rarr;</span>{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavHome;
