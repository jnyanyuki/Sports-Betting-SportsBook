import React from 'react'

const Login = () => (
  <div className="p-4 text-center">
    <h2>Admin Login</h2>
    <div className="my-3 mx-auto" style={{ maxWidth: '320px' }}>
      <input type="text" placeholder="Username" className="form-control mb-2" />
      <input type="password" placeholder="Password" className="form-control mb-2" />
      <button className="btn btn-primary w-100 mt-2">Sign In</button>
    </div>
  </div>
)

export default Login

