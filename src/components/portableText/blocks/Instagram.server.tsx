import clsx from 'clsx';
import type {SanityModuleInstagram} from '../../../types';

type Props = {
  node: SanityModuleInstagram;
};

export default function InstagramBlock({node}: Props) {
  return (
    <div
      className={clsx(
        'first:mt-0 last:mb-0', //
        'my-8',
      )}
    >
     
    </div>
  );
}
