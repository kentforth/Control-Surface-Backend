require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();
let database = require('./config/database');

const swaggerUi = require('swagger-ui-express');

swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(cors());

const videoRouter = require('./routes/videoRouter')
app.use('/api', videoRouter);

app.listen(4050, () => {
    console.log('Server started....')
})
