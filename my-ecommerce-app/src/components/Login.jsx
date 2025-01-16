import React, { useState } from "react";

const Login = () => {
  const [error, setError] = useState(""); // Error state
  const [loading, setLoading] = useState(false); // Loading state

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    try {
      setLoading(true); // Set loading state to true
      const response = await fetch(`${API_URL}/api/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          setError(errorData.detail || "Invalid credentials or server error.");
        } else {
          setError("Server error. Please try again.");
          console.log(response);
        }
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Save the tokens to localStorage
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      <img src="pics/logo.png" alt="Outer Logo" className="absolute top-5 left-5 w-15 h-auto" />

      <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-lg border-4 border-teal-600 text-center">
        <img src="pics/sassique logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-serif font-bold text-teal-500 mb-6">Login</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-4/5 px-4 py-2 border-2 border-teal-600 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-300 mx-auto block"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-4/5 px-4 py-2 border-2 border-teal-600 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-300 mx-auto block"
              required
            />
            <div className="text-right text-sm mt-2 mr-12">
              <a href="/passwordreset" className="text-teal-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-40 h-12 bg-teal-500 text-white rounded-full font-medium text-lg mx-auto block hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Continue"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="border-t flex-grow border-gray-300"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="border-t flex-grow border-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <a href="https://accounts.google.com/signin" target="_blank" rel="noopener noreferrer">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
            </button>
          </a>
          <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <img src="https://img.icons8.com/color/24/facebook-new.png" alt="Facebook" />
            </button>
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-teal-500 font-semibold hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
