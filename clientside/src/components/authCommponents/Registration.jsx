import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaAddressBook, FaMobile } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Registration() {
  const [form, setForm] = useState({ name: "", email: "", phone:"", address:"", password: "" });
  const [message, setMessage]=useState({type:"", text:""})
  const [isSubmitting, setIsSubmitting]=useState(false)

  const navigate=useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    setMessage({type:"", text:""})
    try {
      const response= await axios.post('http://localhost:5000/api/save_user', form)
      console.log(response)
      setMessage({type:"success", text:"Account created successfully!"})
      // navigate to sign up page
      setTimeout(()=>{
        navigate('/login')
      }, 1000)
      // clear the form
      setForm(
        { name: "", email: "", phone:"" , address:"", password: "" }
      )
    }catch(error){
      let errorMessage="An error occured during sigup"
      if(error.response){
        errorMessage=error.response.data.message || "Registration failed. Please try again."
      }else if(error.request){
        errorMessage="No response from server please check your connection"
      }
      setMessage({type:"error", message:errorMessage})
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <main className="min-h-screen mt-16 flex items-center justify-center bg-[var(--bg-primary)] px-4">
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-[var(--bg-card)] rounded-2xl shadow-lg shadow-[var(--shadow)] p-8"
      >
        <h1 className="text-3xl font-semibold text-center mb-6 text-[var(--text-primary)]">
          Create Account
        </h1>
        {/* alert message either signed up or not */}
        {
          message.text && (
            <div className={`mb-4 p-3 rounded-lg ${message.type==="success"
              ?"bg-green-800 text-green-100":"bg-red-800 text-red-100"}`}>
              {message.text}
            </div>
          )
        }
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-[var(--text-muted)] focus:border-[var(--accent)] outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)] transition"
            />
          </div>
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-[var(--text-muted)] focus:border-[var(--accent)] outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)] transition"
            />
          </div>
            {/* Phone */}
          <div className="relative">
            <FaMobile className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              required
              type="phone"
              name="phone"
              placeholder="Mobile"
              value={form.phone}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-[var(--text-muted)] focus:border-[var(--accent)] outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)] transition"
            />
          </div>
           {/* Address */}
          <div className="relative">
            <FaAddressBook className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              required
              type="address"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-[var(--text-muted)] focus:border-[var(--accent)] outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)] transition"
            />
          </div>
          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-[var(--text-muted)] focus:border-[var(--accent)] outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)] transition"
            />
          </div>

          {/* form button */}
         
       <button
          type="submit"
          className={`w-full mt-4 ${
            isSubmitting 
              ? "bg-teal-700" 
              : "bg-teal-500 hover:bg-teal-600"
          } text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 flex justify-center items-center`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : "Sign Up"}
        </button>

        </form>

        <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            Log in
          </Link>
        </p>
      </motion.section>
    </main>
  );
}
