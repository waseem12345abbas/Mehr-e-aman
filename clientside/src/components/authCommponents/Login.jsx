import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const [form, setForm] = useState({ email: "", phone:"", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage]=useState({text:"", type:""})

  // for navigation
  const navigate=useNavigate()

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage({ type: "", text: "" });

  // Basic client-side validation
  if (!form.email || !form.password) {
    setMessage({
      text: "Please provide both email and password",
      type: "error",
    });
    setIsSubmitting(false);
    return;
  }

  try {
    const response = await axios.post('http://localhost:5000/api/login', form, 
      { headers: {
    'Content-Type': 'application/json'
  }}
    );
    console.log("Response", response)
    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      console.log("Token", response.data.token)
      setMessage({
        text: "Logged in successfully",
        type: "success",
      });
      
      // Clear form
      setForm({
        email: "",
        password: "",
      });

      // Redirect to home
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      setMessage({
        text: response.data.message || "Login failed",
        type: "error",
      });
    }
  } catch (error) {
    let errorMessage = "An error occurred during login";
    
    if (error.response) {
      // Server responded with error status code (4xx, 5xx)
      errorMessage = error.response.data.message || 
                    `Login failed (${error.response.status})`;
    } else if (error.request) {
      // Request was made but no response received
      errorMessage = "No response from server - is it running?";
    } else {
      // Something else happened
      errorMessage = error.message;
    }

    setMessage({
      text: errorMessage,
      type: "error",
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-[var(--bg-card)] rounded-2xl shadow-lg shadow-[var(--shadow)] p-8"
      >
        <h1 className="text-3xl font-semibold text-center mb-6 text-[var(--text-primary)]">
          Welcome Back
        </h1>
        
        {message.text && (
          <div
            className={`p-3 mb-2 rounded-lg ${
              message.type === "success"
                ? "bg-green-800 text-green-100"
                : "bg-red-800 text-red-100"
            }`}
          >
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
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
          <div className="text-right text-sm">
            <Link
              to="/forgetpassword"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              Forgot password?
            </Link>
          </div>
          <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-teal-600 hover:bg-teal-700 rounded-md font-semibold transition-all duration-300"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
        <p>Don't have account</p>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
          New here?{" "}
          <Link
            to="/register"
            className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            Create an account
          </Link>
        </p>
      </motion.section> 
    </main>
  );
}
