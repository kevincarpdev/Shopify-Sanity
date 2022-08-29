import clsx from 'clsx';
import type {SanityColorTheme, SanityModuleCallout} from '../../types';
import LinkButton from '../elements/LinkButton';

type Props = {
  colorTheme?: SanityColorTheme;
  module: SanityModuleCallout;
};

export default function CalloutModule({colorTheme, module}: Props) {
  return (
    <div className={module.klass} style={{color: colorTheme?.text}}>
      {/* Text */}
      <div className={clsx('cta-block mx-auto max-w-[60rem] py-16')}>
        <h1 className="pb-4 pt-4 text-center text-2xl font-bold text-lightGray">
          {module.title}
        </h1>
        <p className="px-12 pb-4 text-center text-lightGray ">
          {module.text}
        </p>
      </div>

      {/* Link */}
      {module.link && (
        <div className="mt-4">
          <LinkButton backgroundColor={colorTheme?.text} link={module.link} />
        </div>
      )}
    </div>
  );
}
