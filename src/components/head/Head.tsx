import React from 'react';
import NextHead from 'next/head';
import parse from 'html-react-parser';

// Internal dependencies
import { Site } from '@/utils/config/site';
import { SeoProps } from '@/utils/typings/SeoProps';
import { getAssetPath } from '@/utils/helpers/assets';
import Favicons from '@/components/favicons';
import MetaTags from '@/components/meta-tags';

interface HeadProps {
  seo: SeoProps;
}

export const Head = ({ seo }: HeadProps) => {
  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* META DATA */}
      {
        {
          /* <MetaTags seo={seo} /> */
        }
      }

      {/* FAVICONS */}
      {/* <Favicons path={getAssetPath(`/images/favicons`)} siteName={Site.title} /> */}
    </NextHead>
  );
};
