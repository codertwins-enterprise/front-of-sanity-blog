import Layout from './../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Codertwins">
      <section className="blog-container">
        <div className="blog__posts">
          <div className="blog__post">
            <div class="blog__post--letter">H</div>
            <h1 className="heading-2">Hello World</h1>
            <Link href="/"><a class="blog__post--button">Read On</a></Link>
          </div>
        </div>
      </section>      
    </Layout>
  )
}
