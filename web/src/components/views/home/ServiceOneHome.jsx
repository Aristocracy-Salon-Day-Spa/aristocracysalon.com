// import React, { useEffect } from 'react';
// import { graphql, Link, useStaticQuery } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// import { Button } from '../..';

// const ServiceOneHome = () => {
//   const data = useStaticQuery(graphql`
//     query ServiceOneHomeQ {
//       sanitySettingsCompany {
//         phone
//         phoneHref
//       }
//       imgBeforeAfter: file(
//         relativePath: {
//           eq: "assets/images/home/lawn-care-services-braven-landscape-construction-plympton-ma.jpg"
//         }
//       ) {
//         childImageSharp {
//           gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
//         }
//       }
//     }
//   `);

//   const company = data.sanitySettingsCompany;
//   const imgBeforeAfter = data.imgBeforeAfter.childImageSharp.gatsbyImageData;

//   const containerVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, delay: 0, staggerChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   const controls = useAnimation();
//   const { ref, inView } = useInView({ triggerOnce: true });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//     if (!inView) {
//       controls.start('hidden');
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       variants={containerVariants}
//       initial="hidden"
//       animate={controls}
//       className="bg-white overflow-hidden"
//     >
//       <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           variants={itemVariants}
//           className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"
//         >
//           <div>
//             <h2 className="text-base text-zinc-900 font-semibold tracking-wide uppercase">
//               Landscaping For Residential Homes & Commercial Business
//             </h2>
//             <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
//               Landscaping Services
//             </h3>
//           </div>
//         </motion.div>
//         <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
//           <div className="relative lg:row-start-1 lg:col-start-2">
//             <motion.div
//               ref={ref}
//               variants={itemVariants}
//               className="relative text-base mx-auto max-w-prose lg:max-w-none rounded-lg shadow-lg overflow-hidden"
//             >
//               <figure>
//                 <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
//                   <GatsbyImage
//                     image={imgBeforeAfter}
//                     imgClassName="object-cover object-center"
//                     alt="Landscaping contractor with a lawn mower preparing for lawn care services"
//                   />
//                 </div>
//               </figure>
//             </motion.div>
//           </div>
//           <motion.div
//             ref={ref}
//             variants={itemVariants}
//             className="mt-8 lg:mt-0"
//           >
//             <div className="text-base max-w-prose mx-auto lg:max-w-none">
//               <p className="text-lg text-zinc-500">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
//                 quos temporibus animi ratione facilis. Optio sed provident
//                 dignissimos consectetur maiores modi quo neque exercitationem,
//                 eligendi id minima ea, amet aliquam?
//               </p>
//             </div>
//             <div className="mt-5 prose prose-indigo text-zinc-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
//               <p className="italic">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
//                 tenetur praesentium omnis et fugiat fugit quidem quos ipsa
//                 commodi eligendi explicabo animi quia, corporis esse maiores
//                 atque recusandae necessitatibus mollitia?
//               </p>
//               <ul>
//                 <li>
//                   <strong>Service</strong>: Lorem ipsum dolor sit amet
//                   consectetur adipisicing elit. Necessitatibus temporibus
//                   recusandae aperiam debitis, delectus ex molestiae quibusdam.
//                   Magnam, quasi aliquid nulla odio architecto doloribus
//                   voluptates, blanditiis, deserunt atque id commodi!
//                 </li>
//                 <li>
//                   <strong>Service</strong>: Lorem ipsum dolor sit amet
//                   consectetur adipisicing elit. Necessitatibus temporibus
//                   recusandae aperiam debitis, delectus ex molestiae quibusdam.
//                   Magnam, quasi aliquid nulla odio architecto doloribus
//                   voluptates, blanditiis, deserunt atque id commodi!
//                 </li>
//                 <li>
//                   <strong>Service</strong>: Lorem ipsum dolor sit amet
//                   consectetur adipisicing elit. Necessitatibus temporibus
//                   recusandae aperiam debitis, delectus ex molestiae quibusdam.
//                   Magnam, quasi aliquid nulla odio architecto doloribus
//                   voluptates, blanditiis, deserunt atque id commodi!
//                 </li>
//               </ul>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
//                 illo tenetur ab facere excepturi. Placeat minima libero hic ipsa
//                 ipsum, impedit dolorem repellat? Dolorem atque blanditiis natus
//                 quibusdam? Architecto, quod?
//               </p>
//               <h3>
//                 Give Us A Call:{' '}
//                 <a href={info.phoneHref} className="no-underline">
//                   <span className="text-yellow-500 hover:text-yellow-300 font-bold">
//                     {info.phone}
//                   </span>
//                 </a>
//               </h3>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
//                 exercitationem rem maxime dolorum ipsum cumque vel ut quisquam
//                 maiores voluptate. Amet mollitia iste ad veritatis nobis
//                 assumenda numquam temporibus eligendi?
//               </p>
//               <p className="text-lg">
//                 <em>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </em>
//               </p>
//             </div>
//             <div className="mt-10">
//               <Button
//                 type="internal"
//                 btnLink="/landscaping-services/"
//                 btnLabel="See Landscaping Services"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ServiceOneHome;
