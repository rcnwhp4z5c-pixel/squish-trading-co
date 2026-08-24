import { useState } from 'react'
import Layout from '../components/Layout'

export default function Join() {
  const [form, setForm] = useState({name:'', teacher:'', location:'Recess', level:'Beginner', agreement:false})
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.agreement) return setStatus({error:'You must agree to the anti-scamming statement.'})
    setStatus({loading:true})
    const res = await fetch('/api/join', {method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(form)})
    const data = await res.json()
    if (!res.ok) setStatus({error: data?.error || 'Oops! Something went wrong.'})
    else setStatus({ok: `Request submitted! Your request ID is ${data.requestId}`})
  }

  return (
    <Layout>
      <h2>🎀 Join the Hub</h2>
      <form onSubmit={submit} className="card form">
        <label>Name <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required/></label>
        <label>Teacher / Class <input value={form.teacher} onChange={e=>setForm({...form, teacher:e.target.value})}/></label>
        <label>Preferred trading location
          <select value={form.location} onChange={e=>setForm({...form, location:e.target.value})}>
            <option>Recess</option>
            <option>Lunch</option>
            <option>Specials</option>
            <option>Classroom (only when teacher allows it)</option>
          </select>
        </label>
        <label>Membership level
          <select value={form.level} onChange={e=>setForm({...form, level:e.target.value})}>
            <option>Beginner</option>
            <option>Pro Member</option>
            <option>Staff</option>
            <option>Manager</option>
          </select>
        </label>
        <label className="checkbox"><input type="checkbox" checked={form.agreement} onChange={e=>setForm({...form, agreement:e.target.checked})}/> I agree not to scam, trick, deceive, or intentionally mislead another member during a trade. I understand that dishonest trading can result in my membership or trading privileges being removed.</label>
        <div className="actions">
          <button className="btn primary" type="submit">Submit Request</button>
        </div>
        {status?.loading && <p>Submitting…</p>}
        {status?.error && <p className="error">{status.error}</p>}
        {status?.ok && <p className="ok">{status.ok}</p>}
      </form>
    </Layout>
  )
}
