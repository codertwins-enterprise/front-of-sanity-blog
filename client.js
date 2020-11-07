import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'kl5ygosk',
  dataset: 'production',
  useCdn: true
})