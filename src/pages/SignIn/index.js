/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background-gradientStart to-background-gradientEnd p-4">
      <div className="w-full max-w-md bg-background-card text-text-default rounded-2xl shadow-lg p-6 border border-secondary-default">
        <h2 className="text-3xl font-extrabold text-center">
          Login to PlotPicks
        </h2>
        <p className="text-text-secondary text-center mb-6">
          Your personal recommendation hub
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-muted">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-lg bg-input-background border border-input-border text-text-default p-2 focus:border-input-focus focus:ring-input-focus"
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-muted">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full rounded-lg bg-input-background border border-input-border text-text-default p-2 focus:border-input-focus focus:ring-input-focus"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-default text-text-default py-2 rounded-lg font-semibold hover:bg-primary-hover transition"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-text-muted mt-4">
          New to PlotPicks?{" "}
          <a href="#" className="text-primary-default hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
