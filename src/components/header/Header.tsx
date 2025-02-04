import React from 'react';
//import LanguageSwitch from '@/components/language-switch';
import Logo from '@/components/logo';
import { MenuItemProps } from '@/utils/typings/MenuItemProps';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface HeaderProps {
  menu: MenuItemProps[];
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
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
      <div className={`${className} w-full fixed top-0`}>
        <div className="container">
          <div className="flex items-center relative">
            {/* ACESSIBILITY BUTTON */}
            {/* <button
             onClick={handleSkipLinkClick}
              className="btn text-white py-2 rounded-bottom position-absolute top-0 start-50 translate-middle-x visually-hidden-focusable"
            >
              {'skip-to-content'}
            </button> */}

            <div className="pt-3 d-flex justify-content-between align-items-center w-100">
              {/* LOGO */}
              <Link
                href="/"
                className="d-inline-flex align-items-center text-reset text-decoration-none"
              >
                <Logo />
              </Link>
              {/* LANGUAGE SWITCHERS */}
              {/* <LanguageSwitch /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
