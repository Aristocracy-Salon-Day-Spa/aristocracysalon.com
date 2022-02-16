import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/FontAwesomeIconLibrary';

import { Section, Grid, Col, AnchorText } from '.';
import { useSanity } from '../hooks';

const LinkFooter = () => {
  const { logo, footers, siteSEO, primary, secondary, accent, neutral, hero } =
    useSanity();

  return (
    <Section padding="sm" bgColor={neutral.lighter.color}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Grid classes="lg:grid-cols-12 justify-around">
          <Col classes="space-y-6 col-span-6">
            <div className="mx-auto text-center">
              <GatsbyImage
                image={logo.footer?.asset?.gatsbyImageData}
                alt={`${siteSEO.name} company logo`}
                loading="lazy"
                className="w-56 transition hover:scale-110"
              />
            </div>
            {footers.map((footer) => (
              <p
                key={footer.id}
                className="text-primary text-base text-center italic"
              >
                {footer.tagline}
              </p>
            ))}
            <div className="flex space-x-6 justify-center">
              {footers.map((item) =>
                item.socialLinks.map((social) => (
                  <AnchorText
                    type="external"
                    color={accent.default.color}
                    colorHover={primary.dark.color}
                    key={social.id}
                    href={social.url}
                  >
                    <FontAwesomeIcon
                      className="!text-3xl"
                      icon={['fab', social.icon]}
                    />
                    <span className="text-md font-thin sr-only">
                      {social.anchor}
                    </span>
                  </AnchorText>
                ))
              )}
            </div>
          </Col>
          <Col classes="col-span-3">
            {/* <Col classes="justify-between grid grid-cols-2 lg:grid-flow-col flex-col lg:flex-row gap-12"> */}
            {footers.map((footer) =>
              footer.footerItem.map((item) => (
                <div key={item._key} className="mt-12 xl:mt-0">
                  <h4 className="text-md font-semibold text-zinc-800 tracking-tight uppercase">
                    {item.headline}
                  </h4>
                  <ul className="mt-4 space-y-4">
                    {item.links.map((link) => (
                      <li key={link.id}>
                        <AnchorText
                          type="internal"
                          color={neutral.default.color}
                          colorHover={accent.default.color}
                          to={
                            link.metadata.slug.current === 'home'
                              ? '/'
                              : `/${link.metadata.slug.current}/`
                          }
                          className="text-base break-words"
                        >
                          <span className="break-words">{link.anchor}</span>
                        </AnchorText>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </Col>
          <Col classes="col-span-3">
            <div className="mt-12 xl:mt-0">
              <h4 className="text-md font-semibold text-zinc-800 tracking-wider uppercase">
                Open Hours
              </h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <AnchorText
                    type="external"
                    color={neutral.default.color}
                    colorHover={accent.default.color}
                    href="#"
                    className="text-base break-all"
                  >
                    Tue-Wed: 10AM-9PM
                  </AnchorText>
                </li>
                <li>
                  <AnchorText
                    type="external"
                    color={neutral.default.color}
                    colorHover={accent.default.color}
                    href="#"
                    className="text-base break-all"
                  >
                    Thu: 11AM-7PM
                  </AnchorText>
                </li>
                <li>
                  <AnchorText
                    type="external"
                    color={neutral.default.color}
                    colorHover={accent.default.color}
                    href="#"
                    className="text-base break-all"
                  >
                    Fri: 9AM-4PM
                  </AnchorText>
                </li>
                <li>
                  <AnchorText
                    type="external"
                    color={neutral.default.color}
                    colorHover={accent.default.color}
                    href="#"
                    className="text-base break-all"
                  >
                    Sat: 9AM-3PM
                  </AnchorText>
                </li>
                <li>
                  <AnchorText
                    type="external"
                    color={neutral.default.color}
                    colorHover={accent.default.color}
                    href="#"
                    className="text-base break-all"
                  >
                    Sun-Mon: CLOSED
                  </AnchorText>
                </li>
                {/* {footers.map((item) =>
                  item.contactLinks.map((contact) => (
                    <li key={contact.id}>
                      <AnchorText
                        type="external"
                        color={neutral.default.color}
                        colorHover={accent.default.color}
                        href="#"
                        className="text-base break-all"
                      >
                        {contact.anchor}
                      </AnchorText>
                    </li>
                  ))
                )} */}
              </ul>
            </div>
          </Col>
        </Grid>
      </div>
    </Section>
  );
};

export default LinkFooter;
