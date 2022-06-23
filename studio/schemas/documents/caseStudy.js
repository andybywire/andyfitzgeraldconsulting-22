export default {
  name: 'caseStudy',
  type: 'document',
  title: 'Case Studies',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
    },
    {
      title: 'Date Published',
      name: 'pubDate',
      type: 'date'
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alt Text'
        }
      ]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'skosConcept'}],
      options: {
        filter: '_type == $type && (scheme->title == $scheme)',
        filterParams: {
          type: 'skosConcept',
          scheme: 'Category'
        }
      }
    },
    {
      name: 'coverText',
      type: 'text',
      title: 'Cover Text',
      description: 'Text that appears over the header cover image. 60 - 75 char.',
      rows: 2
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description: 'approx. 100 char',
      rows: 3
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'up to 150 char, likely truncation @ 70',
      rows: 3
    },
    {
      name: 'cta',
      type: 'text',
      title: 'Call to Action',
      description: '60 - 100 char',
      rows: 2
    }, 
    // Review reference goes here
    {
      title: 'At a Glance', 
      name: 'atGlance',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'What I Did', 
      name: 'whatDid',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'Project Goal', 
      name: 'projectGoal',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'Before Image',
      name: 'beforeImage',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption'
        },
        {
          name: 'altText',
          type: 'string',
          title: 'Alt Text'
        }
      ]
    },
    {
      title: 'Project Approach', 
      name: 'projectApproach',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'Project Outcome', 
      name: 'projectOutcome',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'After Image',
      name: 'afterImage',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption'
        },
        {
          name: 'altText',
          type: 'string',
          title: 'Alt Text'
        }
      ]
    }
  ]
}