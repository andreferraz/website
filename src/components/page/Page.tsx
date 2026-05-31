import Script from 'next/script'
import Footer from '@/components/footer'
import Header from '@/components/header'
import type { Locale } from '@/i18n/routing'
import { Site } from '@/utils/config/site'

export interface PageProps {
  className?: string
  children?: React.ReactNode
  alternates?: Partial<Record<Locale, string>>
}

export const Page = ({ className, children, alternates }: PageProps) => {
  return (
    <>
      {Site.isAnalyticsEnabled && (
        <>
          <Script src="https://scripts.simpleanalyticscdn.com/latest.js" data-collect-dnt="true" />
          <Script src="https://scripts.simpleanalyticscdn.com/auto-events.js" />
        </>
      )}

      <div id="page" className={`${className} flex flex-col justify-between min-h-screen`}>
        <Header alternates={alternates} />
        <span></span> {/* For flex justify-between to work, as Header is fixed. */}
        <main id="content" className="mt-(--header-height)">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
