import React from "react";

export const SocialLogin = () => {
  const handleGoogleLogin = async () => {
    const googleAuthUrl = `${process.env.REACT_APP_BACKEND_URL}/auth/google/login/`;
    window.location.href = googleAuthUrl;
  };

  return (
    <div className="social-login">
      <div className="flex justify-center gap-4 mb-4">
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          onClick={handleGoogleLogin}
        >
          <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
        </button>
      </div>
    </div>
  );
};
