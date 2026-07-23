import { useState } from "react";
import logo from "../assets/logo.svg";

function adminlogin() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Admin login logic goes here
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 px-4">
      <div className="w-full max-w-[380px] bg-white rounded-2xl shadow-xl p-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-auto object-contain"
          />
        </div>

        {/* Heading */}
        <div className="text-center mt-2 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Admin Login
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Authorized personnel only
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter admin username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#A11717] focus:ring-2 focus:ring-red-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#A11717] focus:ring-2 focus:ring-red-200"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#A11717] text-white py-2.5 rounded-lg font-semibold hover:bg-[#861313] transition duration-300 shadow-md hover:shadow-lg"
          >
            Admin Login
          </button>
        </form>

        {/* Security Notice */}
        <div className="mt-6 border-t pt-4">
          <p className="text-center text-xs text-gray-500">
            This portal is restricted to authorized administrators only.
          </p>
        </div>
      </div>
    </div>
  );
}

export default adminlogin;