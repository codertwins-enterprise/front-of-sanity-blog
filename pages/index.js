import Head from 'next/head'
import Layout from './../components/Layout'

export default function Home() {
  return (
    <Layout title="Codertwins">
      <div className="blog__post">
        <h1 className="heading-2">Hello World</h1>
      </div>
    </Layout>
  )
}
