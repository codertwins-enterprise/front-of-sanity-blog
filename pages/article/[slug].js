import groq from 'groq'
import client from '../../client'
import BlockContent from '@sanity/block-content-to-react'
import Layout from '../../components/Layout'

const Post = (props) => {
  const { 
    title = 'Missing title', 
    name = 'Missing name', 
    categories,
    body = []
  } = props

  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      <BlockContent
        blocks={body}
        {...client.config()}
      />
    </Layout>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  body
}`

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post