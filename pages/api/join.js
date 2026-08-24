import { supabaseAdmin } from '../../lib/supabaseAdmin'

export default async function handler(req,res){
  if (req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const body = req.body
  // Basic validation
  if (!body.name || !body.agreement) return res.status(400).json({error:'Missing fields or agreement not accepted.'})

  // Ensure service key available
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return res.status(500).json({error:'Server not configured. Please add SUPABASE_SERVICE_ROLE_KEY.'})

  try {
    const insert = await supabaseAdmin.from('join_requests').insert([{ name: body.name, teacher_class: body.teacher, preferred_location: body.location, membership_level: body.level, agreement: body.agreement }]).select().single()
    const reqId = insert.data?.id

    // Create notifications for staff and manager
    await supabaseAdmin.from('notifications').insert([
      { recipient_role: 'Staff', payload: {type:'join_request', requestId: reqId, name: body.name}, is_read:false },
      { recipient_role: 'Manager', payload: {type:'join_request', requestId: reqId, name: body.name}, is_read:false }
    ])

    res.status(200).json({requestId: reqId})
  } catch (err){
    console.error(err)
    res.status(500).json({error:'Oops! Something went wrong.'})
  }
}
