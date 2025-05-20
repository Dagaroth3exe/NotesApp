import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
const SignUpPage = () => {
  return (
    <>
    <div className="flex items-center justify-center mt-28">
      <div className="w-96 border rounded bg-white px-7 py-10">
        <form onSubmit={handleSingUp}>
          <h4 className="text-2xl mb-7">SignUp</h4>

        <input type="text" placeholder="Email" className="Input-Box" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>

        </form>
      </div>
    </div>

    </>
  )
};

export default SignUpPage
