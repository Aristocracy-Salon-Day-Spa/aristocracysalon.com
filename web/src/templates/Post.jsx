import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import PageSidebar from '../components/layouts/PageSidebar';
import Testimonial from '../components/common/Testimonial';
import Section from '../components/layouts/Section';
import Container from '../components/layouts/Container';
import SanityBlockContent from '../components/common/SanityBlockContent';

export const query = graphql`
  query PostTemplateQ($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      description
      schema
      bgImg {
        alt
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      headline
      subheadline
      _rawBody
    }
  }
`;

const PostTemplate = ({ data }) => {
  const sanity = data.sanityPost;
  const seo = {
    title: sanity.title,
    description: sanity.title,
    slug: `${allCompany.website}/blog/${sanity.slug.current}/`,
  };

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">{`${sanity.schema}`}</script>
      </SEO>
      <HeaderPage
        imgHeroBg={sanity.bgImg.asset.gatsbyImageData}
        altText={sanity.bgImg.alt}
        headerText={sanity.headline}
        subheaderText={sanity.subheadline}
      />
      <Section>
        <Container>
          <PageSidebar>
            <SanityBlockContent blocks={sanity._rawBody} />
          </PageSidebar>
        </Container>
      </Section>
    </Layout>
  );
};

export default PostTemplate;
