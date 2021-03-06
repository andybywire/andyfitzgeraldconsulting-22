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
      name: 'siteSubtitle',
      title: 'Site Subtitle',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Site Meta Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'defaultBanner',
      title: 'Default Banner',
      type: 'banner',
      description: '60 - 75 characters',
      options: {
        collapsible: false
      }
    },
    {
      name: 'defaultCta',
      title: 'Default Call to Action',
      type: 'cta',
      description: '60 - 100 characters'
    }
  ]
}