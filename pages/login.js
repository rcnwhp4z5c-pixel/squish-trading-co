import { useState } from 'react'
import Layout from '../components/Layout'

export default function Login(){
  const [email,setEmail]=useState('')
  const [status,setStatus]=useState(null)
  const signIn=async e=>{
    e.preventDefault()
    setStatus({loading:true})
    const res=await fetch('/api/auth', {method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({email})})
    const data=await res.json()
    if(!res.ok) setStatus({error:data?.error||'Unable to send login link.'})
    else setStatus({ok:'If this email exists, a login link was sent.'})
  }
  return (
    <Layout>
      <h2>🔐 Login</h2>
      <form className="card form" onSubmit={signIn}>
        <label>Email (Manager / Staff only)<input value={email} onChange={e=>setEmail(e.target.value)} type="email" required/></label>
        <p className="muted">Managers and Staff must sign in with their school email. Members' join requests do not require email.</p>
        <div className="actions"><button className="btn primary" type="submit">Send login link</button></div>
        {status?.loading && <p>Sending…</p>}
        {status?.error && <p className="error">{status.error}</p>}
        {status?.ok && <p className="ok">{status.ok}</p>}
      </form>
    </Layout>
  )
}
