export async function askAI(question) {
  const response = await fetch("portfolio-ai-assistant-production.up.railway.app", {
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
