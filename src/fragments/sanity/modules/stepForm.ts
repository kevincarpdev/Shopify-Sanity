import groq from 'groq';
import { MARK_DEFS } from '../portableText/markDefs';
import { FORM_FIELD } from '../formField';

export const MODULE_STEP_FORM = groq`
  _key,
  title,
  body[] {
    ...,
    markDefs[] {
      ${MARK_DEFS}
    }
  },
  groups[] {
   ${FORM_FIELD}
  }
`;