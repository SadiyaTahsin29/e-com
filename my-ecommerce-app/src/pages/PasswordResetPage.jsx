import React, { useState } from 'react';

const PasswordResetPage = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate API Call
    setTimeout(() => {
      if (email === "test@example.com") {
        setSuccess(true);
        setError('');
      } else {
        setError('Email not found. Please try again.');
        setSuccess(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      <img src="pics/logo.png" alt="Outer Logo" className="absolute top-5 left-5 w-15 h-auto" />

      <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-lg border-4 border-teal-600 text-center">
        <img src="pics/sassique logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-serif font-bold text-teal-500 mb-6">Reset Your Password</h2>

        {success ? (
          <div className="text-green-600 text-center mb-4">
            A password reset link has been sent to your email.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-4/5 px-4 py-2 border-2 border-teal-600 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-300 mx-auto block"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              className="w-40 h-12 bg-teal-500 text-white rounded-full font-medium text-lg mx-auto block hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <p className="text-gray-500 text-sm mt-4">
          Remember your password?{' '}
          <a href="/login" className="text-teal-500 font-semibold hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default PasswordResetPage;
