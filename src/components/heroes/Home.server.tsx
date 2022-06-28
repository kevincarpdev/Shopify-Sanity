import clsx from 'clsx';
import type {SanityHeroHome} from '../../types';
import LinkButton from '../elements/LinkButton';
import CallToActionModule from '../modules/CallToAction.server';
import HeroContent from './HeroContent.server';

type Props = {
  hero: SanityHeroHome;
};

export default function HomeHero({hero}: Props) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center rounded-b-xl px-4 pb-4 pt-24',
        'md:px-8 md:pb-8 md:pt-34',
      )}
    >
      {/* Title */}
      {hero.title && (
        <h1
          className={clsx(
            'mb-7 max-w-[60rem] whitespace-pre-line text-center text-2xl font-bold',
            'md:text-3xl',
          )}
        >
          {hero.title}
        </h1>
      )}

      {/* Link */}
      {hero.link && <LinkButton link={hero.link} />}

      {/* Hero content */}
      {hero.content && (
        <div
          className={clsx(
            'mt-6 w-full', //
            'md:mt-12',
          )}
        >
          <HeroContent content={hero.content} />
        </div>
      )}
      {/* CTA Component */}
     <div className="cta-block w-full bg-blue pb-16 pt-16">
      <h1 className="text-center text-2xl font-bold text-lightGray pb-4 pt-4">Whats Sanity?</h1>
      <p className="pl-12 pr-12 pb-4 text-lightGray text-center ">Nullam dictum efficitur leo non auctor. Etiam a mollis massa. Quisque congue vitae felis et viverra. Nam sed lacus in neque fermentum ullamcorper. Nulla facilisi. Fusce facilisis, odio non vulputate convallis, enim leo lobortis risus, sed venenatis arcu erat eget augue. Morbi tellus sem, dignissim non eleifend ut, fermentum et elit. Aliquam et ipsum ultrices dolor fringilla ornare nec in massa. Donec non enim quis dui mollis semper non faucibus arcu. Integer quis lobortis mauris, nec efficitur mi. Vestibulum et leo pharetra, maximus magna ut, egestas leo.</p>
      <p className="pl-12 pr-12 pb-4 text-lightGray text-center">Link to demo?</p>
     </div>

     {/* Two Col*/}

     <div className="w-full pb-16 pt-16">
        <div className="grid grid-cols-2 gap-2 text-left',
            'md:grid-cols-2">
              <div>image here</div>
              <div>
                <h2 className="text-2xl font-bold text-black pb-16 pt-4">All the features you need in one affordable solution.</h2>
                <ul className="list-disc text-lg">
                  <li>Inventory Managment</li>
                  <li>Store Locator</li>
                  <li>Multiple Solution Sizes</li>
                  <li>Storefront integration</li>
                  <li>Headless CMS</li>
                  <li>Your Choice of Framework</li>
                  <li>Custom Theming</li>
                </ul>
              </div>

            </div>
        </div>

        <div className="cta-block w-full pb-16 pt-16">
      <h1 className="text-center text-2xl font-bold text-black pb-4 pt-4">Choose the right solution for your business.</h1>
      <p className="pl-12 pr-12 pb-4 text-black text-center ">Quiz will go here</p>
      <p className="pl-12 pr-12 pb-4 text-lightGray text-center">Link to packages</p>
     </div>
    </div>
  );
}
