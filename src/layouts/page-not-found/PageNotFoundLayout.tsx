import LinkButton from '@/components/link-button';
import { useTranslations } from 'next-intl';
import { FiArrowLeft } from 'react-icons/fi';

export const PageNotFoundLayout = () => {
  const t = useTranslations('pageNotFound');
  return (
    <div className="container py-7 py-lg-9">
      <span className="text-[8rem] md:text-[10rem] font-bold text-with-black-stroke relative opacity-20 leading-none px-1">
        404
        <span className="absolute bottom-[15%] h-[70%] block w-full bg-gradient-to-t from-white to-transparent" />
      </span>
      <h1 className="mb-5 relative">{t('title')}</h1>
      <p className="lead mb-8">{t('description')}</p>
      <p>
        <LinkButton href="/" isHighlighted>
          <FiArrowLeft size={'1.25em'} className="mr-1.5" />
          {t('cta')}
        </LinkButton>
      </p>
    </div>
  );
};
