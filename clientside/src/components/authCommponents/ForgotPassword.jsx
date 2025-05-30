import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: call /api/forgot‑password
      await new Promise((r) => setTimeout(r, 1200));
      setSent(true);
    } finally {
      setLoading(false);
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
          Forgot Password
        </h1>

        {sent ? (
          <p className="text-center text-[var(--text-muted)]">
            If an account exists for&nbsp;
            <span className="text-[var(--accent)]">{email}</span>, a reset link
            has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-[var(--text-muted)] focus:border-[var(--accent)] outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)] transition"
              />
            </div>

            {/* SIMPLE TAILWIND BUTTON */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--text-primary)] py-3 rounded-xl shadow-lg shadow-[var(--shadow)] focus:ring-2 focus:ring-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {loading ? "Sending…" : "Send Reset Link"}
            </motion.button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
          Remembered?{" "}
          <Link
            to="/"
            className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            Back to login
          </Link>
        </p>
      </motion.section>
    </main>
  );
}
