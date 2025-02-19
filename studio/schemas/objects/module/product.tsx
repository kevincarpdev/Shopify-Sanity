import {TagIcon} from '@sanity/icons'
import React from 'react'
import ShopifyDocumentStatus from '../../../components/media/ShopifyDocumentStatus'

export default {
  name: 'module.product',
  title: 'Product',
  type: 'object',
  icon: TagIcon,
  fields: [
    {
      name: 'productWithVariant',
      title: 'Product + Variant',
      type: 'productWithVariant',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      isDeleted: 'productWithVariant.product.store.isDeleted',
      previewImageUrl: 'productWithVariant.product.store.previewImageUrl',
      status: 'productWithVariant.product.store.status',
      title: 'productWithVariant.product.store.title',
    },
    prepare(selection) {
      const {isDeleted, previewImageUrl, status, title} = selection
      return {
        media: (
          <ShopifyDocumentStatus
            isActive={status === 'active'}
            isDeleted={isDeleted}
            type="product"
            url={previewImageUrl}
          />
        ),
        subtitle: 'Product',
        title,
      }
    },
  },
}
