import {BulbOutlineIcon} from '@sanity/icons'

export default {
  name: 'module.callout',
  title: 'Callout',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'klass',
      title: 'Class',
      type: 'string'
    },
    // Text
    {
      name: 'text',
      title: 'Body',
      type: 'text',
      rows: 10,
      validation: (Rule: { required: () => any; }) => [
        Rule.required()
      ],
    },
    // Link
    {
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
      validation: (Rule: { required: () => any; }) => Rule.max(1),
    },
  ],
  preview: {
    select: {
      text: 'text',
      url: 'url',
    },
    prepare(selection) {
      const {title, url} = selection
      return {
        title: title,
        subtitle: 'Callout'
      }
    },
  },
}
