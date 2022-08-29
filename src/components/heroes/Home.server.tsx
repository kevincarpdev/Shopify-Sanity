import clsx from 'clsx';
import type { SanityHeroHome } from '../../types';
import LinkButton from '../elements/LinkButton';
import CallToActionModule from '../modules/CallToAction.server';
import HeroContent from './HeroContent.server';
import Logo from '/logo.png';
import Speed from '/speed.png';
import Security from '/security.png';
import Cart from '/cart.png';
import Cloud from '/cloud.png';

type Props = {
  hero: SanityHeroHome;
};

export default function HomeHero({ hero }: Props) {
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
          <img className="mx-auto py-12" alt="Matilda" src={Logo} />
          {hero.title}
        </h1>
      )}

      {/* Link */}
      {hero.link && <LinkButton link={hero.link} />}

      {/* Hero content */}

      {/* CTA Component */}
      <div className="bleed angle bg-blue mt-16 mb-16">
        <div className="cta-block py-16 max-w-[60rem] mx-auto">
          <h1 className="text-center text-2xl font-bold text-lightGray py-4">Whats Matilda?</h1>
          <p className="px-12 pb-4 text-lightGray text-center ">Nullam dictum efficitur leo non auctor. Etiam a mollis massa. Quisque congue vitae felis et viverra. Nam sed lacus in neque fermentum ullamcorper. Nulla facilisi. Fusce facilisis, odio non vulputate convallis, enim leo lobortis risus, sed venenatis arcu erat eget augue. Morbi tellus sem, dignissim non eleifend ut, fermentum et elit. Aliquam et ipsum ultrices dolor fringilla ornare nec in massa. Donec non enim quis dui mollis semper non faucibus arcu. Integer quis lobortis mauris, nec efficitur mi. Vestibulum et leo pharetra, maximus magna ut, egestas leo.</p>
          <p className="px-12 pb-4 text-lightGray text-center">Link to demo?</p>
        </div>
      </div>

      {/* Two Col

     <div className="w-full py-16 two-col max-w-[60rem] mx-auto">
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
        </div> */}

      <div className="py-16 max-w-[75rem] mx-auto">
        <h2 className="text-center text-2xl font-bold text-black py-4">What can Matilda do for you?</h2>
        <div className="grid grid-cols-1 sm:grid-col-3 md:grid-cols-4 gap-4 text-left">
          <div className="p-8 text-callout">
            <img src={Speed} alt="speed" />
            <h3 className="text-xl font-bold text-black py-4">Blinding speed</h3>
            <p>When you update your products or content, your whole site is recompiled into static pages. No more waiting for carts to load or process. Everything is done in a flash.</p>
          </div>
          <div className="p-8 text-callout">
            <img src={Security} alt="Security" />
            <h3 className="text-xl font-bold text-black py-4">Unmatched Security</h3>
            <p>Using cutting edge frameworks packed with the latest in security patches and hosted on a managed server,  you can rest easy that your site will be there when you wake up.</p>
          </div>
          <div className="p-8 text-callout">
            <img src={Cloud} alt="SEO" />
            <h3 className="text-xl font-bold text-black py-4">Optimized</h3>
            <p>SEO is a breeze with Matilda, our clients regularly see 90+ on their site scores. Google won't be able to keep their hands off of you. </p>
          </div>
          <div className="p-8 text-callout">
            <img src={Cart} alt="Shopify" />
            <h3 className="text-xl font-bold text-black py-4">Built for you</h3>
            <p>Use your favorite front-end framework, use your favorite shopping cart. Matilda can handle it all. </p>
          </div>
        </div>
      </div>

      <div className="pricing-block py-16 max-w-[75rem] mx-auto">
        <h2 className="text-center text-2xl font-bold text-black py-4">Choose the right solution for your business.</h2>
        <p className="px-12 pb-4 text-black text-center ">Matilda comes in several different size solutions to give you the right amount of power for the right price.</p>
        <div className="grid grid-cols-1 gap-3 text-left md:grid-cols-3 gap-y-6">
          <div className="p-8 text-lightGray">
            <h3 className="text-2xl font-bold py-4 text-shadow">The Specialist.</h3>

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
            <h3 className="text-2xl font-bold py-4 text-shadow">Small Buisness.</h3>

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
            <h3 className="text-2xl font-bold py-4 text-shadow">Enterprise.</h3>

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

        <div className="text-center mt-12 py-12 flex justify-center">
          {hero.link && <LinkButton link={hero.link} />}
        </div>


      </div>
    </div>
  );
}
