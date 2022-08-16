import groq from 'groq';

export const FORM_FIELD = groq`
    _key,
    _type,
    fieldType,
    title,
    placeholderText
`;
