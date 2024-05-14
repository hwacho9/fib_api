// use the express module
const express = require("express");
const app = express();

const fibonacci = require("./fibonacchi");
const PORT = process.env.PORT || 3000;

app.get('/fib', (req, res) => {
    const n = parseInt(req.query.n);

    if (isNaN(n) || n < 1) {
        return res.status(400).json({ status: 400, message: 'Bad request.' });
    }

    const result = fibonacci(n);
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});