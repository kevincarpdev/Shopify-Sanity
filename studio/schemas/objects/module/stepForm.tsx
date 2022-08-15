import { GrSteps } from "react-icons/gr";

export default {
  name: 'module.stepForm',
  title: 'Multi-step form',
  type: 'object',
  icon: GrSteps,
  fieldsets: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'fields',
      title: 'Fields',
    }
  ],
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      fieldset: 'content',
    },
    // Body
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 2,
      fieldset: 'content',
    },
    // Form Fields
    {
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [{ type: 'formField' }],
      validation: (Rule) => Rule.required(),
      fieldset: 'fields',
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection
      return {
        subtitle: 'Call to action',
        title,
      }
    },
  },
}
