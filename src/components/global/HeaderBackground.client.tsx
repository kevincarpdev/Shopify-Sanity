import {Link} from '@shopify/hydrogen';
import LogoIcon from '../icons/Logo';
import clsx from 'clsx';
import {useEffect, useState} from 'react';
import Hat from '/name-logo.svg';

export default function HeaderBackground() {
  const [scrolledDown, setScrolledDown] = useState(false);

  const handleScroll = () => {
    setScrolledDown(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Trigger handler on mount to account for reloads
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Background */}
      <div
        className={clsx([
          'absolute inset-0 bg-blue bg-opacity-90 backdrop-blur-lg backdrop-filter duration-500',
          scrolledDown ? 'opacity-100' : 'opacity-0',
        ])}
      />

      {/* Logo */}
      <Link to="/">
        <div
          className={clsx(
            'absolute bottom-0 top-0 left-1/2 flex w-[50px] -translate-x-1/2 items-center',
            'lg:w-[165px]',
          )}
        >
          <img src={Hat} />
          {/* <LogoIcon
            className="h-auto w-full"
            classNameMark={clsx([
              'duration-700',
              scrolledDown ? 'translate-y-1/4' : 'translate-y-0',
            ])}
            classNameType={clsx([
              'duration-500',
              scrolledDown
                ? 'opacity-0 translate-y-1'
                : 'opacity-100 translate-y-0',
            ])}
          /> */}
        </div>
      </Link>
    </div>
  );
}
