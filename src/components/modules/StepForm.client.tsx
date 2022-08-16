import { useState } from "react";
import clsx from 'clsx';
import type { SanityColorTheme, SanityModuleStepForm } from '../../types';
import { Steps, StepsProvider, useSteps } from "react-step-builder";

type Props = {
  colorTheme?: SanityColorTheme;
  module: SanityModuleStepForm;
};
interface User {
  fname: string;
  lname: string;
  email: string;
}

export default function StepFormModule({ colorTheme, module }: Props) {
  const { prev, next, jump, total, current, progress } = useSteps();
  const [user, setUser] = useState<User>({ fname: "", lname: "", email: "" });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
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
      
      {module.groups.map(group => (
        <Steps key={group._key}>
          <div className="text-xl">{group.title}</div>
        </Steps>
      ))}

      <div className="steps_wrapper">
        <h1>React Form</h1>
        <Steps>
          <div className="step">
            <h1>Step 1</h1>
            
          </div>
          <div className="step">
            <h1>Step 2</h1>
            
            <div className="form">
              <label htmlFor="fname">First Name:</label>
              <input
                id="fname"
                name="fname"
                value={user.fname}
                onChange={handleChange}
              />
              <label htmlFor="lname">Last Name:</label>
              <input
                id="lname"
                name="lname"
                value={user.lname}
                onChange={handleChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="step">
            <h1>Step 3</h1>
            <p>
              No more magical state handling methods or props receiving. All the
              data you entered is here because App component is still alive.
            </p>
            <div className="form_data">
              <p>First Name: {user.fname}</p>
              <p>Last Name: {user.lname}</p>
              <p>Email: {user.email}</p>
            </div>
          </div>
          <div className="step">
            <h1>Step 4</h1>
            <p>This is the final step.</p>
            <p>Thanks for checking out React Step Builder!</p>
            <p>
              Please read{" "}
              <a
                href="https://www.npmjs.com/package/react-step-builder"
                target="_blank"
                rel="noreferrer"
              >
                the documentation
              </a>{" "}
              for all the features. If you want to contribute, check out{" "}
              <a
                href="https://github.com/sametweb/react-step-builder"
                target="_blank"
                rel="noreferrer"
              >
                the GitHub repository
              </a>
              .
            </p>
          </div>
        </Steps>
        <div className="navigation">
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
          <button onClick={() => jump(2)}>Jump to Step 2</button>
        </div>
        <div className="steps_data">
          <div>Total Steps: {total}</div>
          <div>Current Step: {current}</div>
          <div>Progress: {progress * 100}%</div>
        </div>
      </div>

    </div>
  );
}
