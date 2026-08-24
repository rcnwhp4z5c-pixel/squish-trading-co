import Layout from '../../components/Layout'

export default function StaffDashboard(){
  return (
    <Layout>
      <h2>⭐ Staff Dashboard</h2>
      <div className="card">
        <p>Staff features: view assigned trades, moderate community, receive staff notifications.</p>
        <ul>
          <li>View trades assigned to you</li>
          <li>Update assigned trade status</li>
          <li>Moderate messages</li>
        </ul>
      </div>
    </Layout>
  )
}
