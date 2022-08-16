import { BsInputCursorText } from "react-icons/bs";

export default {
  title: 'Form Field',
  name: 'formField',
  type: 'object',
  icon: BsInputCursorText,
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
    // Title
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      title: 'title',
      fieldType: 'fieldType',
    },
    prepare(selection) {
      const { title, fieldType } = selection

      return {
        // media: image,
        subtitle: fieldType,
        title,
      }
    },
  },
}
