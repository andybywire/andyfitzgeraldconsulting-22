export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  initialValue: {
    title: 'Settings'
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true
    },
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Site Meta Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'defaultBannerCopy',
      title: 'Default Banner Copy',
      type: 'text',
      rows: 3
    },
    {
      name: 'defaultBannerImg',
      title: 'Default Banner Image',
      type: 'image'
    },
    {
      name: 'defaultCta',
      type: 'text',
      title: 'Default Call to Action',
      description: '60 - 100 char',
      rows: 2
    }
  ]
}