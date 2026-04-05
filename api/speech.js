export default function handler(req, res) {
  // This looks for the GEMINI_API_KEY you saved in Vercel Settings
  const key = process.env.GEMINI_API_KEY;

  if (!key) {
    return res.status(500).json({ error: "API Key not found in Vercel Environment Variables" });
  }

  res.status(200).json({ apiKey: key });
}
