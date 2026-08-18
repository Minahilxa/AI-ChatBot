const express = require("express");
const { sendMessage, getHistory } = require("../controllers/chat.controller");

const router = express.Router();

router.post("/chat", sendMessage);
router.get("/chat/history", getHistory);

module.exports = router;
