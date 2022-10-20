import Link from "next/link"

export default function Navbar() {

  return (
    <nav className="header">
<h1 className="logo"><a href="#">Next</a></h1>
    <ul className={`main-nav`}><li> <Link href="/">
    <a>
       home
    </a>
    </Link></li>
<li> <Link href="/dashboard">
    <a>
       Dashboard
    </a>
    </Link></li>
    <li> <Link href="/users">
    <a>
       User
    </a>
    </Link></li>

    <li> <Link href="/blog">
    <a>
       Blog
    </a>
    </Link></li>

    <li> <Link href="/servers/users">
    <a>
       SSR
    </a>
    </Link></li>

    <li> <Link href="/api/auth/signin">
    <a>
       Sign In
    </a>
    </Link></li>

    <li> <Link href="/api/auth/signout">
    <a>
       Sign Out
    </a>
    </Link></li>
    
    </ul>
    </nav>
  )
}
