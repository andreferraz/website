import Header from '@/components/header';
import Footer from '@/components/footer';
import { Site } from '@/utils/config/site';
import Script from 'next/script';

export interface PageProps {
  className?: string;
  children?: React.ReactNode;
}

export const Page = ({ className, children }: PageProps) => {
  return (
    <>
      {Site.isAnalyticsEnabled && (
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" data-collect-dnt="true" />
      )}

      <div id="page" className={`${className} flex flex-col justify-between min-h-screen`}>
        <Header />
        <span></span> {/* For flex justify-between to work, as Header is fixed. */}
        <div id="content" className="mt-(--header-height)">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};
