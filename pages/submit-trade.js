import { useState } from 'react'
import Layout from '../components/Layout'

export default function SubmitTrade(){
  const [form,setForm]=useState({have:'', want:'', specific:'', location:'Recess', notes:'', agreement:false})
  const [status,setStatus]=useState(null)
  const submit=async e=>{
    e.preventDefault()
    if(!form.agreement) return setStatus({error:'You must agree to the anti-scamming statement.'})
    setStatus({loading:true})
    const res=await fetch('/api/trade', {method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify(form)})
    const data=await res.json()
    if(!res.ok) setStatus({error:data?.error||'Oops! Something went wrong.'})
    else setStatus({ok:`Trade submitted! Trade ID: ${data.tradeId}`})
  }
  return (
    <Layout>
      <h2>🫧 Submit a Trade</h2>
      <form className="card form" onSubmit={submit}>
        <label>What squishy do you have?<input value={form.have} onChange={e=>setForm({...form, have:e.target.value})} required/></label>
        <label>What do you want in exchange?<input value={form.want} onChange={e=>setForm({...form, want:e.target.value})}/></label>
        <label>What specific item are you looking for?<input value={form.specific} onChange={e=>setForm({...form, specific:e.target.value})}/></label>
        <label>Preferred trading location<select value={form.location} onChange={e=>setForm({...form, location:e.target.value})}>
          <option>Recess</option>
          <option>Lunch</option>
          <option>Specials</option>
          <option>Classroom (only when teacher allows it)</option>
        </select></label>
        <label>Additional notes<textarea value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})}></textarea></label>
        <label className="checkbox"><input type="checkbox" checked={form.agreement} onChange={e=>setForm({...form, agreement:e.target.checked})}/> I agree not to scam, trick, deceive, or intentionally mislead another member during a trade.</label>
        <div className="actions"><button className="btn primary" type="submit">Submit Trade</button></div>
        {status?.loading && <p>Submitting…</p>}
        {status?.error && <p className="error">{status.error}</p>}
        {status?.ok && <p className="ok">{status.ok}</p>}
      </form>
    </Layout>
  )
}
