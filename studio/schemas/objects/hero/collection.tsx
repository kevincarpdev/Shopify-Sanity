export default {
  name: 'hero.collection',
  title: 'Collection hero',
  type: 'object',
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 3,
    },
    // Description
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    // Content
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      validation: (Rule: { required: () => any; }) => Rule.max(1),
      of: [
        {
          name: 'productWithVariant',
          title: 'Product with variant',
          type: 'productWithVariant',
        },
        {
          name: 'imageWithProductHotspots',
          title: 'Image',
          type: 'imageWithProductHotspots',
        },
      ],
    },
  ],
}
