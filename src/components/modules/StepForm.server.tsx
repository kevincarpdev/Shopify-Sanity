import clsx from 'clsx';
import type { SanityColorTheme, SanityModuleStepForm } from '../../types';

type Props = {
  colorTheme?: SanityColorTheme;
  module: SanityModuleStepForm;
};

export default function StepFormModule({ colorTheme, module }: Props) {
  return (
    <div
      style={{ color: colorTheme?.text }}
    >
      {/* Text */}
      <div
        className={clsx(
          'max-w-[60rem] text-2xl', //
          'md:text-4xl',
        )}
      >
        {module.title}
        
      </div>
      {module.body}

      {module?.groups?.map((group) => (
        <div key={group._key}>
          <div className="text-xl">{group.title}</div>
        </div>
      ))}
    </div>
  );
}
