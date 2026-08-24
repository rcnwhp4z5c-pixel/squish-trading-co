import Link from 'next/link'

export default function Header(){
  return (
    <header className="site-header">
      <div className="brand">🎀🫧 SQUISH TRADING CO. 🫧🎀</div>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/join"><a>Join</a></Link>
        <Link href="/submit-trade"><a>Submit a Trade</a></Link>
        <Link href="/rules"><a>Rules</a></Link>
        <Link href="/community"><a>Community</a></Link>
        <Link href="/login"><a>Login</a></Link>
      </nav>
    </header>
  )
}
