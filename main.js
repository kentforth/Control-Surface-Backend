require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

let database = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const videoRouter = require('./routes/videoRouter')

//Swagger
swaggerDocument = require('./swagger.json');

if (process.env.SWAGGER_ENABLE === 'true') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

//Routes
app.use('/api', videoRouter);

//Handle Errors
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
                 error: {
                     message: error.message
                 }
             })
})

app.use(express.json());
app.use(cors());

app.listen(4050, () => {
    console.log('Server started....')
})
