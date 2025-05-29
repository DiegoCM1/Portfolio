export async function askAI(question) {
  const response = await fetch("https://portfolio-ai-assistant-production.up.railway.app/ask", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Backend error:", errorText);
    throw new Error("AI request failed");
  }

  const data = await response.json();
  return data.response;
}
