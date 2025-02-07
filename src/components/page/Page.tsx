import React from 'react';
import { LayoutProps } from '@/utils/typings/LayoutProps';
import Header from '@/components/header';

export interface PageProps extends LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const Page = ({ route, options, className, children }: PageProps) => {
  return (
    <>
      {/* <Head seo={route.seo} /> */}

      {/* {Site.isAnalyticsEnabled && (
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" data-collect-dnt="true" />
      )} */}

      <div id="page" className={className}>
        <Header />
        {
          <div className="mt-(--header-height)">{children}</div>
          /* FOOTER */
        }
        {/* <Header menu={[]} />

				<div id="div">{children}</div>

				<Footer socialMenu={[]} options={options} className="content-visibility-auto" /> */}
        {/* CONTAINER GUIDE (For development purposes) */}
        {/* {process?.env.NODE_ENV === 'development' && router.query.guide && <GuideContainer />} */}
      </div>
    </>
  );
};
