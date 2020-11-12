import Head from 'next/head';
import Navbar from './Navbar'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Coderstwins helps you to become a good web developer. We teach you HTML, CSS and Javascript. Enjoy learning." />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Domine&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/d0d9868073.js" crossOrigin="anonymous"></script>
        <title>{title}</title>
        <meta name="google-site-verification" content="FKApUNhSKv1SfKXC0nsKio99Qtsrbrphx8v-DMLdCv4" />
      </Head>
      <main className="container">
        {/** Navbar */}
        <Navbar />
        {/** Navbar END*/}

        {/** Blog Container */}
        {children}
        {/* <section className="blog-container">
          <div className="blog__posts">
          </div>
        </section> */}
        {/** Blog Container END */}
      </main>
    </>
  )
}