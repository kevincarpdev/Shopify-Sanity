import {BlockElementIcon, ImageIcon} from '@sanity/icons'

export default {
  name: 'module.callToAction',
  title: 'Call to action',
  type: 'object',
  icon: BlockElementIcon,
  fieldsets: [
    {
      name: 'copy',
      title: 'Copy',
    },
  ],
  fields: [
    // Layout
    {
      name: 'layout',
      title: 'Layout direction',
      type: 'string',
      initialValue: 'left',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          {
            title: 'Content / Copy',
            value: 'left',
          },
          {
            title: 'Copy / Content',
            value: 'right',
          },
        ],
      },
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
      fieldset: 'copy',
    },
    // Body
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 2,
      fieldset: 'copy',
    },
    // Link
    {
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
      validation: (Rule: { required: () => any; }) => Rule.max(1),
      fieldset: 'copy',
    },
    // Content
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      validation: (Rule: { required: () => any; }) => Rule.required().max(1),
      of: [
        {
          icon: ImageIcon,
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'productWithVariant',
          title: 'Product + Variant',
          type: 'productWithVariant',
          validation: (Rule: { required: () => any; }) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        subtitle: 'Call to action',
        title,
      }
    },
  },
}
