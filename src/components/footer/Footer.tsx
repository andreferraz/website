// External dependencies
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Container } from 'react-bootstrap';

// Internal modules
import { Component, Credits } from './Footer.styles';
import { OptionsProps } from '@/typings/OptionsProps';
import { MenuItemProps } from '@/typings/MenuItemProps';
import SocialButtons from '@/components/social-buttons';
import { useTranslation } from 'react-i18next';

// Properties definition
interface Props {
  socialMenu: MenuItemProps[];
  options: OptionsProps;
  className?: string;
}

export const Footer = ({ className = '', socialMenu }: Props): JSX.Element => {
  const { t } = useTranslation('common');

  socialMenu = [
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/andreferraz-dev/',
      target: '_blank',
      rel: 'noopener nofollow',
      icon: 'linkedin',
    },
    {
      text: 'GitHub',
      href: 'https://github.com/andreferraz',
      target: '_blank',
      rel: 'noopener nofollow',
      icon: 'github',
    },
    {
      text: 'Medium',
      href: 'https://medium.com/@andreferrazdev',
      target: '_blank',
      rel: 'noopener nofollow',
      icon: 'medium',
    },
    {
      text: 'E-mail',
      href: 'mailto:hello@andreferraz.dev',
      titleAttr: 'Copy e-mail',
      icon: 'email',
    },
  ];

  const stack = (
    <>
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noreferrer nofollow"
        title={`Next.js - ${t('openExternalLink')}`}
        className="link-underlined"
      >
        Next.js
      </a>
      <br />
    </>
  );

  return (
    <Component className={`${className} w-100`}>
      <Container>
        <div className="d-flex flex-column align-items-start flex-md-row justify-content-md-between align-items-md-center mt-auto py-5">
          {socialMenu !== undefined && (
            <SocialButtons links={socialMenu} className="ms-n2 mb-4 mb-md-0" />
          )}

          <Credits
            className="mb-0 link-uppercase"
            dangerouslySetInnerHTML={{
              __html: t('credits', {
                stack: ReactDOMServer.renderToStaticMarkup(stack),
              }),
            }}
          />
        </div>
      </Container>
    </Component>
  );
};
