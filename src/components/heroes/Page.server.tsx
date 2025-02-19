import clsx from 'clsx';
import type {SanityColorTheme, SanityHeroPage} from '../../types';
import HeroContent from './HeroContent.server';

type Props = {
  colorTheme?: SanityColorTheme;
  fallbackTitle: string;
  hero?: SanityHeroPage;
};

export default function PageHero({colorTheme, fallbackTitle, hero}: Props) {
  if (!hero) {
    return (
      <h1
        className={clsx(
          'mx-auto max-w-[60rem] px-4 pb-8 pt-34 text-center text-3xl',
          'md:px-8 md:text-4xl',
        )}
      >
        {fallbackTitle}
      </h1>
    );
  }

  return (
    <div
      className={clsx(
        'rounded-b-xl bg-blue pt-36',
      )}
      style={{background: colorTheme?.background}}
    >
      {/* Title */}
      {hero.title && (
        <h1
          className={clsx(
            'max-w-[60rem] whitespace-pre-line text-2xl',
            'md:text-4xl pl-12',
          )}
          style={{color: colorTheme?.text || 'black'}}
        >
          {hero.title}
        </h1>
      )}

      {/* Hero content */}
      {hero.content && (
        <div className="mt-8">
          <HeroContent content={hero.content} />
        </div>
      )}
    </div>
  );
}
