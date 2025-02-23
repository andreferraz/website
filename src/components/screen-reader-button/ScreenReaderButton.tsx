'use client';

import { useTranslations } from 'next-intl';

interface ScreenReaderButtonProps {
  className?: string;
}

export const ScreenReaderButton = ({ className = '' }: ScreenReaderButtonProps) => {
  const t = useTranslations('common');

  function handleSkipLinkClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const focussable = Array.prototype.filter.call(
      document.querySelectorAll(
        '#content a:not([disabled]), #content button:not([disabled]), #content input:not([disabled]), footer a:not([disabled])',
      ),
      function (element) {
        // Check for visibility while always include the current activeElement
        return (
          element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement
        );
      },
    );
    focussable[0].focus();
  }

  return (
    <button
      onClick={handleSkipLinkClick}
      className={`${className} btn sr-only focus-visible:not-sr-only whitespace-nowrap py-2! px-3! fixed! rounded-b-lg rounded-t-none top-0 left-[50%] -translate-x-[50%]`}
    >
      {t('skipToContent')}
    </button>
  );
};
