import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const RegisterPage = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function registerUser(e){
    e.preventDefault()
    try {
      await axios.post('/register',{
        name,
        email,
        password
      });
      alert("Registration successful. Now you can log in.")
    } catch (error) {
      alert('Registration failed. Please try again later.')
    }
  }
  return (
    <div className=" mt-4 grow flex items-center justify-around ">
      <div className="mb-64">
         <h1 className="text-4xl text-center mb-4">Register</h1>
         <form className="max-w-md mx-auto " onSubmit={registerUser}>
            <input type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="your@example.com" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="primary">Register</button>
            <div className="text-center py-2 text-gray-500">
              Already a member? <Link className="underline text-blue-600" to={'/login'}>Login</Link>
            </div>
         </form>
      </div>
    </div>
  )
}

export default RegisterPage