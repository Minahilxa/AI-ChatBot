require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/api/chat", async (req, res) => {
  const { userMessage } = req.body;

  if (!userMessage) {
    return res.status(400).send({ error: "Message is required." });
  }

  try {
    const apiKey = process.env.AI_API_KEY;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      },
    );

    res.send({ response: response.data });
  } catch (error) {
    console.error("Error with AI API call:", error);
    res.status(500).send({ error: "Error with AI API call." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
