import type {Block} from '@sanity/types';
import {Link} from '@shopify/hydrogen';
import clsx from 'clsx';
import groq from 'groq';
import {LINKS} from '../../fragments/sanity/links';
import {PORTABLE_TEXT} from '../../fragments/sanity/portableText/portableText';
import useSanityQuery from '../../hooks/useSanityQuery';
import type {SanityLink} from '../../types';
import LogoIcon from '../icons/Logo';
import PortableText from '../portableText/PortableText.server';
import SanityFooter from './SanityFooter.server';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer() {
  const {data: footer} = useSanityQuery<{
    links: SanityLink[];
    text: Block[];
  }>({query: QUERY_SANITY});

  const renderLinks = footer?.links.map((link) => {
    if (link._type === 'linkExternal') {
      return (
        <div className="mb-6" key={link._key}>
          <a
            className="linkTextNavigation"
            href={link.url}
            rel="noreferrer"
            target={link.newWindow ? '_blank' : '_self'}
          >
            {link.title}
          </a>
        </div>
      );
    }
    if (link._type === 'linkInternal') {
      if (!link.slug) {
        return null;
      }

      return (
        <div className="mb-6" key={link._key}>
          <Link className="linkTextNavigation" to={link.slug}>
            {link.title}
          </Link>
        </div>
      );
    }
    return null;
  });

  return (
    <footer className="-mt-overlap" role="contentinfo">
      {/* AVKA Footer */}
      
        {footer?.text && (
          <PortableText
            blocks={footer.text}
            className={clsx(
              'text-xs', //
              'text-sm text-darkGray',
            )}
          />
        )}

      {/* Sanity Footer */}
      <SanityFooter />
    </footer>
  );
}
const QUERY_SANITY = groq`
  *[_type == 'settings'][0].footer {
    links[] {
      ${LINKS}
    },
    text[]{
      ${PORTABLE_TEXT}
    },
  }
`;
