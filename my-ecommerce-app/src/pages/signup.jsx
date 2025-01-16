import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Updated API endpoint
      const response = await fetch('http://127.0.0.1:8000/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if the response is not OK (like 404, 500, etc.)
      if (!response.ok) {
        const errorText = await response.text(); // Read response as text for debugging
        console.error('Error during signup, response text:', errorText);
        setError('An error occurred during sign-up. Please try again.');
        return;
      }

      // Check if the content type is JSON before attempting to parse
      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text(); // Get raw response text for debugging
        console.error('Unexpected response type:', text);
        setError('Unexpected server response. Please try again.');
        return;
      }

      // Parse the JSON response
      const data = await response.json();

      // Handle successful sign-up
      console.log('Sign-up successful:', data);
      // You can redirect here if needed (e.g., navigate to login)

    } catch (err) {
      console.error('Network error:', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative">
      {/* Logo outside container */}
      <div className="absolute top-2 left-2">
        <img src="pics/logo.png" alt="Logo" className="w-20 h-20" />
      </div>

      <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-lg border-4 border-teal-600">
        <div className="flex justify-center mb-4">
          <img src="pics/logo.png" alt="Logo" className="w-16 h-16" />
        </div>

        <h2 className="text-center text-2xl font-bold text-teal-600 mb-6 font-serif">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {/* Email/Phone */}
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">Email / Phone</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email / Phone"
              className="w-4/5 px-4 py-2 border-2 border-teal-600 rounded-md mx-auto block focus:outline-none focus:ring-2 focus:ring-teal-300"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-4/5 px-4 py-2 border-2 border-teal-600 rounded-md mx-auto block focus:outline-none focus:ring-2 focus:ring-teal-300"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-4/5 px-4 py-2 border-2 border-teal-600 rounded-md mx-auto block focus:outline-none focus:ring-2 focus:ring-teal-300"
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          {/* Continue Button */}
          <button
            type="submit"
            className="w-2/5 h-12 bg-teal-500 text-white rounded-lg font-medium text-lg mx-auto block hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Continue'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="border-t flex-grow border-gray-300"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="border-t flex-grow border-gray-300"></div>
        </div>

        {/* Social Login */}
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

        {/* Login Link */}
        <p className="text-center text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="text-teal-600 underline hover:text-teal-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
