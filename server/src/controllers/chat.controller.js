const Chat = require("../models/Chat");
const { getAIResponse } = require("../services/openai.service");

const sendMessage = async (req, res, next) => {
  try {
    const { userMessage, sessionId } = req.body;

    if (!userMessage || !userMessage.trim()) {
      return res.status(400).json({ error: "Message is required." });
    }

    const aiResponse = await getAIResponse(userMessage);

    Chat.create({ userMessage, aiResponse, sessionId }).catch((err) =>
      console.error("Failed to save chat:", err.message),
    );

    return res.status(200).json({ response: aiResponse });
  } catch (error) {
    next(error);
  }
};

const getHistory = async (req, res, next) => {
  try {
    const { sessionId } = req.query;
    const filter = sessionId ? { sessionId } : {};

    const history = await Chat.find(filter).sort({ createdAt: 1 }).limit(100);

    return res.status(200).json({ history });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendMessage, getHistory };
