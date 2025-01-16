import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders login page elements", async () => {
  render(<App />);
  
  // Use waitFor to wait for the elements to appear
  await waitFor(() => {
    const loginHeader = screen.getByText(/Login/i); // Adjusted to match your content
    const usernameInput = screen.getByPlaceholderText(/Username/i); // Match placeholder text
    const passwordInput = screen.getByPlaceholderText(/Password/i); // Match placeholder text
    const continueButton = screen.getByRole('button', { name: /Continue/i }); // Match button text
    
    expect(loginHeader).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
  });
});
