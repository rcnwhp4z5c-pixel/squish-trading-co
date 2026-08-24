import { supabaseAdmin } from '../../lib/supabaseAdmin'

export default async function handler(req,res){
  if (req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const b = req.body
  if (!b.have || !b.agreement) return res.status(400).json({error:'Missing fields or agreement not accepted.'})
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return res.status(500).json({error:'Server not configured. Please add SUPABASE_SERVICE_ROLE_KEY.'})
  try{
    const insert = await supabaseAdmin.from('trade_requests').insert([{
      requester_name: b.requester_name || null,
      have_item: b.have,
      want_item: b.want,
      specific_item: b.specific,
      preferred_location: b.location,
      notes: b.notes,
      agreement: b.agreement
    }]).select().single()
    const tradeId = insert.data?.id
    await supabaseAdmin.from('notifications').insert([
      { recipient_role: 'Staff', payload: {type:'trade_request', tradeId}, is_read:false },
      { recipient_role: 'Manager', payload: {type:'trade_request', tradeId}, is_read:false }
    ])
    res.status(200).json({tradeId})
  }catch(err){
    console.error(err)
    res.status(500).json({error:'Oops! Something went wrong.'})
  }
}
