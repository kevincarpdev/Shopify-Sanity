export default {
  name: 'hero.home',
  title: 'Home hero',
  type: 'object',
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 3,
    },
    // Link
    {
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
      validation: (Rule: { required: () => any; }) => Rule.max(1),
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
