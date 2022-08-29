import {type HydrogenRouteProps, Seo} from '@shopify/hydrogen';
import clsx from 'clsx';
import groq from 'groq';
import PageHero from '../../components/heroes/Page.server';
import Layout from '../../components/global/Layout.server';
import NotFound from '../../components/global/NotFound.server';
import PortableText from '../../components/portableText/PortableText.server';
import {PAGE} from '../../fragments/sanity/pages/page';
import ModuleGrid from '../../components/modules/ModuleGrid.server';
import useSanityQuery from '../../hooks/useSanityQuery';
import type {SanityPage} from '../../types';
import ReactGA from "react-ga4";

// This demo doesn't use Shopify Online Store pages.
// For this reason we don't use Shopify Analytics here.
export default function PageRoute({params}: HydrogenRouteProps) {
  const {handle} = params;
  const {data: sanityPage} = useSanityQuery<SanityPage>({
    query: QUERY_SANITY,
    params: {slug: handle},
  });

  if (!sanityPage) {
    // @ts-expect-error <NotFound> doesn't require response
    return <NotFound />;
  }

  const sanitySeo = sanityPage.seo;

  // Google Analytics
  ReactGA.initialize("UA-239158215-1");
  ReactGA.send({ hitType: "pageview", page: handle });

  return (
    <Layout>
      {/* Page hero */}
      <PageHero
        colorTheme={sanityPage.colorTheme}
        fallbackTitle={sanityPage.title}
        hero={sanityPage.hero}
      />
      {/* Body */}
      {sanityPage.body && (
        <PortableText
          blocks={sanityPage.body}
          centered
          className={clsx(
            'mx-auto max-w-[660px] px-4 pb-24 pt-8', //
            'md:px-8',
          )}
          colorTheme={sanityPage.colorTheme}
        />
      )}
      <Seo
        data={{
          seo: {
            description: sanitySeo.description,
            title: sanitySeo.title,
          },
        }}
        type="page"
      />
       {sanityPage?.modules && (
        <div
          className={clsx(
            'mb-32 mt-24 px-4', //
            'md:px-8',
          )}
        >
          <ModuleGrid items={sanityPage.modules} />
        </div>
      )}
    </Layout>
  );
}
const QUERY_SANITY = groq`
  *[
    _type == 'page'
    && slug.current == $slug
  ][0]{
    ${PAGE}
  }
`;
