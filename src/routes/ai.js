const express = require('express');
const { generateText } = require('../services/ai');

const router = express.Router();

// Route to generate text using OpenAI or Hugging Face
router.post('/generate', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const result = await generateText(prompt);
        res.json({ generatedText: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate text' });
    }
});

module.exports = router;
