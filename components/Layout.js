import Header from './Header'

export default function Layout({children}){
  return (
    <div className="page">
      <Header />
      <main className="container">{children}</main>
      <footer className="footer">© Squish Trading Co. — Be kind, trade fair 🫧</footer>
    </div>
  )
}
