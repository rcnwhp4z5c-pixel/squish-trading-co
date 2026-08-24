import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <h1 className="title">🎀🫧 SQUISH TRADING CO. 🫧🎀</h1>
        <p className="tagline">A cute, school-friendly hub for organizing respectful squishy trades.</p>

        <div className="button-grid">
          <Link href="/join"><a className="btn primary">🎀 Join the Hub</a></Link>
          <Link href="/submit-trade"><a className="btn">🫧 Submit a Trade</a></Link>
          <Link href="/my-requests"><a className="btn">💕 My Requests</a></Link>
          <Link href="/community"><a className="btn">💬 Community</a></Link>
          <Link href="/login"><a className="btn">⭐ Staff Login</a></Link>
          <Link href="/login"><a className="btn">👑 Manager Login</a></Link>
        </div>

        <section className="how">
          <h2>How Squish Trading Co. works</h2>
          <ol>
            <li>Join the Hub by submitting a short request (no email required).</li>
            <li>Submit trade requests when you want to swap squishies.</li>
            <li>Staff help organize assigned trades. The Manager approves members and assigns Staff.</li>
            <li>Be kind, fair, and follow school rules — and please don't scam.</li>
          </ol>
        </section>
      </div>
    </Layout>
  )
}
