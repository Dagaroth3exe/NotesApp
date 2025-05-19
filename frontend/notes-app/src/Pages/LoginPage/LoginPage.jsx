import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'

const LoginPage = () => {

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)

  return <>
      <Navbar/>

      <div className="flex items-center justify-center mt-28 ">
        <div className="w-96 border-1 rounded px-7 py-10 bg-white border-black drop-shadow-md">
          <form onSubmit={() => {}}>
            <h4 className='text-2xl mb-7'>Login</h4>
            
            <input type="text" placeholder="Email" className="Input-Box" />

            <PasswordInput/>

            <button type="submit" className="btn-primary">Login</button>

            <p className="text-sm text-center mt-4">Not registered yet?{" "}
              <Link to="/signup" className="font-medium text-primary underline">Create an Account</Link>
            </p>
          </form>
        </div>
      </div>
  </>
}

export default LoginPage