export async function askAI(question) {
  const response = await fetch("https://portfolio-ai-assistant-production.up.railway.app/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) {
    throw new Error("AI request failed");
  }

  const data = await response.json();
  return data.response;
}
