import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../Inputs/PasswordInput'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../utils/Helper';

const SignUpPage = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)

  const handleSingUp = async (e) => {
    e.preventDefault();
    // Add your signup logic here

    if(!name){
      setError("PLease enter your name");
      return
    }

    if(!validateEmail(email)){
      setError("Please Enter a valid email address");
      return;
    } 
    if(!password){
      setError("Please Enter a valid password");
      return;
    }

    setError("");
    //SignUp API call
  };

  return (
    <>
      <Navbar/>
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSingUp}>
            <h4 className="text-2xl mb-7">SignUp</h4>
            <input
              type="text"
              placeholder="Name"
              className="Input-Box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="Input-Box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />

            {error && <p className="text-red-500 text-sm">{error}</p>} 

            <button type="submit" className="btn-primary rounded">Create an Account</button>

            <p className="text-sm text-center mt-4">
              Already registered?{" "}
              <Link to="/login" className="font-medium text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;


