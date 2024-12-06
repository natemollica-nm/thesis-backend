const axios = require('axios');

// Generate text using OpenAI API
const generateText = async (prompt) => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'text-davinci-003', // Replace with your preferred model
                prompt: prompt,
                max_tokens: 100,
                temperature: 0.7,
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error calling OpenAI API:', error.message);
        throw error;
    }
};

module.exports = { generateText };
