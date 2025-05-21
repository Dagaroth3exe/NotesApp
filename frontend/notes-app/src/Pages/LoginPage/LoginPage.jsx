import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'
import { validateEmail } from '../../utils/Helper'

const LoginPage = () => {

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)

  const HandleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please Enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please Enter a valid password");
      return;
    }
    setError("");
    // Continue with login logic...
  } 

  return <>
      <Navbar/>

      <div className="flex items-center justify-center mt-28 ">
        <div className="w-96 border rounded px-7 py-10 bg-white border-black drop-shadow-md">
          <form onSubmit={HandleLogin}>
            <h4 className='text-2xl mb-7'>Login</h4>
            
            <input
              type="text"
              placeholder="Email"
              className="Input-Box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput value={password} 
              onChange={(e) => setPassword(e.target.value)} />

            {error && <p className="text-red-500 text-sm">{error}</p>} 

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