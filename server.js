const app = require('./app');
require('dotenv').config(); // load the environment variables
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});