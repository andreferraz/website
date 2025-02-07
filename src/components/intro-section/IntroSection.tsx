import { useTranslations } from 'next-intl';

interface IntroSectionProps {
  className?: string;
}

export const IntroSection = ({ className = '' }: IntroSectionProps) => {
  const t = useTranslations('intro-section');

  return (
    <section className={`${className}`}>
      <div className="container">
        <div className="grid grid-cols-12 gap-4 w-full">
          {/* <div xs={12} md={8} xl={7} xxl={6}> */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex">
            <h1 className="mb-5 md:mb-0 self-end *:block *:max-sm:text-[14vw] *:max-sm:leading-[14vw] *:lg:max-xl:text-7xl">
              <span>{t('title.greeting')}</span>
              <span>{t('title.introduction')}</span>
              <span className="bg-text-mask bg-linear-to-r from-blue-700 to-cyan-500">
                André Ferraz
              </span>
            </h1>
          </div>
          {/* <div xs={12} md={4} xl={5}> */}
          <div className="col-span-12 md:col-span-5 lg:col-span-6 xl:col-start-8 flex">
            <p className="lead self-end xl:mb-2" dangerouslySetInnerHTML={{ __html: t('brief') }} />
          </div>
        </div>
      </div>
    </section>
  );
};
