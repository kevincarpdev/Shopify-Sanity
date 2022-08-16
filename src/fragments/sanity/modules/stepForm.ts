import groq from 'groq';
import { MARK_DEFS } from '../portableText/markDefs';
import { FORM_FIELD } from '../formField';

export const MODULE_STEP_FORM = groq`
  _key,
  body[] {
    ...,
    markDefs[] {
      ${MARK_DEFS}
    }
  },
  title,
  formFields[] {
    ${FORM_FIELD}
  }
`;
