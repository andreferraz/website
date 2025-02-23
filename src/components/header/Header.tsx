import React from 'react';
import Logo from '@/components/logo';
import Link from 'next/link';
import LanguageSwitch from '../language-switch';
import ScreenReaderButton from '../screen-reader-button';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = '' }: HeaderProps) => {
  return (
    <>
      <div
        className={`${className} w-full fixed top-0 bg-white shadow-[0px_60px_60px_rgba(255,255,255,1),0px_30px_30px_rgba(255,255,255,1)]`}
      >
        <div className="container flex items-center relative h-(--header-height)">
          <ScreenReaderButton />
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
