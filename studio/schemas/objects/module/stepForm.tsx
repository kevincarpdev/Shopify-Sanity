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
    // Form Fields Groups
    {
      name: 'groups',
      title: 'Groups',
      type: 'array',
      of: [
        {
          name: 'group',
          title: 'Group',
          type: 'object',
          icon: false,
          fields: [
            // Field Type: text, dropdown, 
            {
              name: 'fieldType',
              title: 'Field Type',
              type: 'string',
              initialValue: 'text',
              options: {
                direction: 'horizontal',
                layout: 'radio',
                list: [
                  {
                    title: 'Text',
                    value: 'text',
                  },
                  {
                    title: 'Select Dropdown',
                    value: 'dropdown',
                  },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: { required: () => any; }) => Rule.required(),
            },
            // Placeholder
            {
              title: 'Placeholder Text',
              name: 'placeholderText',
              type: 'string',
              options: { source: 'title' },
            }
          ],
          preview: {
            select: {
              fieldType: 'fieldType',
              title: 'title',
            },
            prepare(selection) {
              const { fieldType, title } = selection
              return {
                subtitle: fieldType,
                title,
              }
            },
          },
        },
      ],
    },
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
        subtitle: 'Multi-step form',
        title,
      }
    },
  },
}
