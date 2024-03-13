const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const value = "Hello World";

    if (!value) {
        return res.status(400).json({ error: 'value' });
    }

    res.json({
        message: 'Posted successfully', data: {
            value
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
