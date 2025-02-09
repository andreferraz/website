import React from 'react';
import Logo from '@/components/logo';
import Link from 'next/link';
import LanguageSwitch from '../language-switch';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = '' }: HeaderProps) => {
  /* function handleSkipLinkClick(event) {
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
  } */

  return (
    <>
      <div
        className={`${className} w-full fixed top-0 bg-white shadow-[0px_60px_60px_rgba(255,255,255,1),0px_30px_30px_rgba(255,255,255,1)]`}
      >
        <div className="container flex items-center relative h-(--header-height)">
          {/* <button
             onClick={handleSkipLinkClick}
              className="btn text-white py-2 rounded-bottom position-absolute top-0 start-50 translate-middle-x visually-hidden-focusable"
            >
              {'skipToContent'}
            </button> */}
          <div className="flex justify-between items-center w-full pt-3">
            <Link href="/" className="inline-flex items-center">
              <Logo />
            </Link>
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </>
  );
};
