/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background-gradientStart to-background-gradientEnd p-4">
      <div className="w-full max-w-md bg-background-card text-text-default rounded-2xl shadow-lg p-6 border border-secondary-default">
        <h2 className="text-3xl font-extrabold text-center">
          Create an Account
        </h2>
        <p className="text-text-secondary text-center mb-6">
          Join PlotPicks today!
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-muted">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-lg bg-input-background border border-input-border text-text-default p-2 focus:border-input-focus focus:ring-input-focus"
              placeholder="Example"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-text-muted mt-4">
          Already have an account?{" "}
          <a href="#" className="text-primary-default hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
