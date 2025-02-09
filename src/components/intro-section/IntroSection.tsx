import { useTranslations } from 'next-intl';

interface IntroSectionProps {
  className?: string;
}

export const IntroSection = ({ className = '' }: IntroSectionProps) => {
  const t = useTranslations('introSection');

  return (
    <section className={`${className}`}>
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-10 w-full">
          <div className="col-span-12 lg:col-span-6 flex">
            <h1 className="self-end lg:mb-0! *:block *:max-sm:text-[14vw] *:max-sm:leading-[14vw] *:lg:max-xl:text-7xl">
              <span>{t('title.greeting')}</span>
              <span>{t('title.introduction')}</span>
              <span className="bg-text-mask bg-linear-to-r from-blue-700 to-cyan-500">
                André Ferraz
              </span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-6 flex">
            <p
              className="lead self-end xl:mb-2 lg:ps-10 lg:pe-0 xl:px-10"
              dangerouslySetInnerHTML={{ __html: t('brief') }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
