const express = require("express");
const router = express.Router();
const audioUpload = require("../middleware/audioUpload");

const { chatbot, audiochat } = require("../controllers/openai");

router.route("/chatbot").post(chatbot);
router.post("/AudioQuestion", audioUpload.single("Audio"), audiochat);
module.exports = router;
