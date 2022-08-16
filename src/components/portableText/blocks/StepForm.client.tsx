// @ts-expect-error incompatibility with node16 resolution
import { Disclosure } from '@headlessui/react';
// @ts-expect-error incompatibility with node16 resolution
import type { PortableTextBlock } from '@portabletext/types';
import clsx from 'clsx';
import type { SanityModuleStepForm } from '../../../types';
// import PortableText from '../portableText/PortableText.server';

type Props = {
  node: PortableTextBlock & SanityModuleStepForm;
};

export default function StepFormBlock({ node }: Props) {
  return (
    <div
      className={clsx(
        'first:mt-0 last:mb-0', //
        'my-8',
      )}
    >
      {node?.groups?.map((group) => (
        <Disclosure key={group._key}>
          {() => (
            <>
              <div className="truncate">{group.title}</div>
              {/* <PortableText blocks={group.body} /> */}
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
