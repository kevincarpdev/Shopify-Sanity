import clsx from 'clsx';
import type { SanityColorTheme, SanityModuleStepForm } from '../../types';

type Props = {
  colorTheme?: SanityColorTheme;
  module: SanityModuleStepForm;
};

export default function StepFormModule({ colorTheme, module }: Props) {
  console.log("StepFormModule", module);
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

      {/* Fields */}
      {/* {module.formFields && (
        {module.formFields.map(field => (
          <div className="mt-4">
            <div className="text-xl">{field.label}</div>
            <div className="mt-2">{field.value}</div>
          </div>
        ))}
      )} */}
    </div>
  );
}
