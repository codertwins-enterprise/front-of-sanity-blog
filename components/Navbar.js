import Link from 'next/link'

export default function Navbar() {
  return (
    <section className="section">
      <nav className="navbar">
        <div className="logo">
          <Link href="/"><a>codertwins</a></Link>
        </div>
        <div className="links">
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href=""><a>Post</a></Link></li>
            <li><Link href=""><a>Categories</a></Link></li>
          </ul>
        </div>
      </nav>
    </section>
  )
}