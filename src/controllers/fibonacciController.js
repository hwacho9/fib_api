// controllers/fibonacciController.js
const { fibonacci } = require('../services/fibonacchiService');

const getFibonacci = (req, res) => {
    const n = parseInt(req.query.n);

    if (isNaN(n) || n < 1) {
        return res.status(400).json({ status: 400, message: 'Bad request.' });
    }

    const result = fibonacci(n);
    res.json({ result: result });
};

module.exports = {
    getFibonacci
};
