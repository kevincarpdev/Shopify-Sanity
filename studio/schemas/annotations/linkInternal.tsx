/**
 * Annotations are ways of marking up text in the block content editor.
 *
 * Read more: https://www.sanity.io/docs/customization#f924645007e1
 */
import {LinkIcon} from '@sanity/icons'
import React from 'react'
import {PAGE_REFERENCES} from '../../constants'

export default {
  title: 'Internal Link',
  name: 'annotationLinkInternal',
  type: 'object',
  blockEditor: {
    icon: () => <LinkIcon />,
    render: ({children}) => (
      <span>
        <LinkIcon
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em',
          }}
        />
        {children}
      </span>
    ),
  },
  fields: [
    // Reference
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      validation: (Rule: { required: () => any; }) => Rule.required(),
      to: PAGE_REFERENCES,
    },
  ],
}
