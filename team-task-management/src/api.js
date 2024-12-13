// src/api.js
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export async function generateJwt(googleToken) {
  const response = await fetch(`${API_BASE_URL}/api/generate_jwt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ googleToken }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate JWT");
  }

  return await response.json();
}
