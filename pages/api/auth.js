import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(url, anon)

export default async function handler(req,res){
  if (req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const { email } = req.body
  if (!email) return res.status(400).json({error:'Email required'})
  try{
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) throw error
    res.status(200).json({ok:true})
  }catch(err){
    console.error(err)
    res.status(500).json({error:'Unable to send login link.'})
  }
}
