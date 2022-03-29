/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import TimeIcon from '../../../assets/graphics/time-is-money.svg';
import RecruitmentIcon from '../../../assets/graphics/recruitment.svg';
import GrowthIcon from '../../../assets/graphics/growth.svg';

const StyledIcon = styled.div`
  color: ${(props) => props.$color};
`;

const BenefitsHome = function () {
  const data = useStaticQuery(graphql`
    query BenefitsHomeQ {
      imgBenefitOne: file(
        relativePath: { eq: "assets/graphics/time-is-money.png" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBenefitTwo: file(
        relativePath: {
          eq: "assets/images/home/industries-information-technology-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBenefitThree: file(
        relativePath: {
          eq: "assets/images/home/industries-manufacturing-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const { primary, secondary, accent, neutral, hero } = useSanity();

  const imgBenefitOne = data.imgBenefitOne.childImageSharp.gatsbyImageData;
  const imgBenefitTwo = data.imgBenefitTwo.childImageSharp.gatsbyImageData;
  const imgBenefitThree = data.imgBenefitThree.childImageSharp.gatsbyImageData;

  const benefits = [
    {
      icon: TimeIcon,
      name: 'Save Time & Money',
      description:
        '"He understands our needs and gears in to action quickly - without wasting time. It has been a pleasure working with Rich."',
      author: 'Hiro Endo, Chief Technology Officer',
      position: 'Test Devices - SCHENCK USA CORP.',
    },
    {
      icon: RecruitmentIcon,
      name: 'High-Calibar Candidates',
      description:
        '"Immediately produced strong candidates, one of which we hired remotely within a month of working with Rich."',
      author: 'Barry Shaw, Senior Director of Quality',
      position: 'Arsenal Medical',
    },
    {
      icon: GrowthIcon,
      name: 'Scale Your Business',
      description:
        '"His goal was a long term relationship with me and my organization, not a short term win for himself, and that showed in everything he did."',
      author: 'Mike Egli, Director of Supply Chain',
      position: 'Tegra Medical',
    },
  ];

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
    <div className="relative bg-zinc-200 py-16 sm:py-24 lg:py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h3 className="text-base font-semibold tracking-wider text-primary uppercase">
          You deserve the best talent
        </h3>
        <h2 className="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl">
          Let us find the perfect fit
        </h2>
        {/* <p className="mt-5 max-w-prose mx-auto text-xl text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          neque esse hic similique natus. Doloremque qui perferendis quaerat
          sint tempore aut fuga. Quasi ullam fuga architecto numquam hic
          recusandae accusamus.
        </p> */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div className="pt-6">
                <motion.div
                  ref={ref}
                  variants={itemVariants}
                  className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                  <div className="">
                    <StyledIcon $color={primary.default.color}>
                      <benefit.icon className="h-40 w-40 mx-auto fill-current" />
                    </StyledIcon>
                    <div className="relative z-10">
                      <h3 className="mt-8 text-3xl font-medium text-zinc-800">
                        <span className="">{benefit.name}</span>
                      </h3>
                      <p className="mt-5 mb-8 text-xl text-zinc-500 italic">
                        <span className="">{benefit.description}</span>
                      </p>
                      <p className="mt-5 text-base text-primary font-bold">
                        <span>{benefit.author}</span>
                      </p>
                      <p className="mb-8 text-base text-zinc-800 font-semibold">
                        <span>{benefit.position}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BenefitsHome;
