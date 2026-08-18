const axios = require("axios");
const { aiApiKey } = require("../config/env");

const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

const getAIResponse = async (userMessage) => {
  const { data } = await axios.post(
    OPENAI_URL,
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    },
    {
      headers: {
        Authorization: `Bearer ${aiApiKey}`,
        "Content-Type": "application/json",
      },
      timeout: 15000,
    },
  );

  const content = data?.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("Unexpected response format from AI provider.");
  }

  return content;
};

module.exports = { getAIResponse };
