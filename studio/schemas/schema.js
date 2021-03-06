// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import service from './documents/service'
import caseStudy from './documents/caseStudy'
import article from './documents/article'
import client from './documents/client'
import review from './documents/review'
import event from './documents/event'
import collection from './documents/collection'
import singleton from './documents/singleton'
import settings from './documents/settings'

// object schemas
import banner from './objects/banner'
import cta from './objects/cta'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    article,
    caseStudy,
    service,
    client,
    review,
    event,
    collection,
    singleton,
    settings,
    banner,
    cta
  ]),
})
