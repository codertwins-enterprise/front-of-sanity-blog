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
  } = props;

  // const bodyText = props.body;


  const serializers = {
    types: {
      block: props => (
        <p className="blog__post--paragraph">
          {props.children}
        </p>
      )
    }
  }

  return (
    <Layout title={title}>
<<<<<<< Updated upstream
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
=======
      <section className="blog-container">
        <div className="blog__posts">
          <div className="blog__post">
            <div class="blog__post--letter">{title[0]}</div>
            <h1 className="heading-2">{title}</h1>
            <span className="blog__post--date">
              By {name} / 
              {categories && (
                <>
                  In
                  {categories.map(category => <span> {category}</span>)}
                </>
            )}
            </span>                           
            {/* {bodyText.map((user, index) => (
              <p className="blog__post--paragraph" key={index}>
                {user.children[0].text}
              </p>
            ))}    */}
               
            <BlockContent
              blocks={body}
              serializers={serializers}
              {...client.config()}
            />
          </div>          
        </div>
      </section>      
>>>>>>> Stashed changes
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