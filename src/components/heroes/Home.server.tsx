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
      <div className="bleed angle bg-blue mt-16 mb-16">
        <div className="cta-block pb-16 pt-16 max-w-[60rem] mx-auto">
          <h1 className="text-center text-2xl font-bold text-lightGray pb-4 pt-4">Whats Sanity?</h1>
          <p className="pl-12 pr-12 pb-4 text-lightGray text-center ">Nullam dictum efficitur leo non auctor. Etiam a mollis massa. Quisque congue vitae felis et viverra. Nam sed lacus in neque fermentum ullamcorper. Nulla facilisi. Fusce facilisis, odio non vulputate convallis, enim leo lobortis risus, sed venenatis arcu erat eget augue. Morbi tellus sem, dignissim non eleifend ut, fermentum et elit. Aliquam et ipsum ultrices dolor fringilla ornare nec in massa. Donec non enim quis dui mollis semper non faucibus arcu. Integer quis lobortis mauris, nec efficitur mi. Vestibulum et leo pharetra, maximus magna ut, egestas leo.</p>
          <p className="pl-12 pr-12 pb-4 text-lightGray text-center">Link to demo?</p>
        </div>
      </div>

     {/* Two Col*/}

     <div className="w-full pb-16 pt-16 two-col max-w-[60rem] mx-auto">
        <div className="grid grid-cols-2 gap-2 text-left',
            'md:grid-cols-2">
              <div>image here</div>
              <div>
                <h2 className="text-2xl font-bold text-black pb-16 pt-4">All the features you need in one affordable solution.</h2>
                <ul className="list-disc text-xl">
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

        <div className="pricing-block pb-16 pt-16 max-w-[75rem] mx-auto">
      <h2 className="text-center text-2xl font-bold text-black pb-4 pt-4">Choose the right solution for your business.</h2>
      <p className="pl-12 pr-12 pb-4 text-black text-center ">Sanity comes in several different size solutions to give you the right amount of power for the right price.</p>
      <div className="grid grid-cols-3 gap-3 text-left',
            'md:grid-cols-1">
              <div className="p-8 text-lightGray">
                <h3 className="text-2xl font-bold pb-4 pt-4 text-shadow">The Specialist.</h3>

                <p>Ideal for businesses who sell a single of few products, or a new buisness who needs a custom and affotdable web solution.  Sleek and nimble site with all the power of an enterprise e-commerce site.</p>

                <p>Features include:</p>

                <ul>
                  <li>Shopify Inregration</li>
                  <li>Custom Theming</li>
                  <li>3-months pre-paid support</li>
                </ul>

                <h4 className="text-2xl font-bold"><span>Starting at:</span>
              $8,500</h4>
              </div>
              <div className="p-8 text-lightGray">
                <h3 className="text-2xl font-bold pb-4 pt-4 text-shadow">Small Buisness.</h3>

                <p>This package was designed for the small business who is ready to stand on their own feet. You have inventory, you have a web presence, you're ready to get an online storefront that will serve you now and well into the future. </p>

                <p>Features include:</p>

                <ul>
                  <li>Shopify/BC Inregration</li>
                  <li>Celigo Integration</li>
                  <li>Custom Theming</li>
                  <li>6-months pre-paid support</li>
                  <li>Blog System</li>
                </ul>

                <h4 className="text-2xl font-bold"><span>Starting at:</span>
              $14,500</h4>
              </div>
              <div className="p-8 text-lightGray">
                <h3 className="text-2xl font-bold pb-4 pt-4 text-shadow">Enterprise.</h3>

                <p >The Big Leagues. You need a package that can handle anything that gets thrown as it with an expansive feature set and tons of user friendly options. </p>

                <p>Features include:</p>

                <ul>
                  <li>Shopify/BC Inregration</li>
                  <li>Celigo Integration</li>
                  <li>1 year or support</li>
                  <li>Data Migration</li>
                  <li>Blog</li>
                  <li>Store Locator</li>
                  <li>Custom Theming</li>
                </ul>

                <h4 className="text-2xl font-bold"><span>Starting at:</span>
              $32,500</h4>
              </div>

              
            </div>
            <div className="text-center py-12 flex justify-center">
              {hero.link && <LinkButton link={hero.link} />}
            </div>
      
      
     </div>
    </div>
  );
}
