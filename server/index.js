const express = require('express');
require('./db/db');
const userRouter = require('./routers/userRouter');
const adminRouter = require('./routers/adminRouter');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(adminRouter);



app.listen('5000',() => {
    console.log('Server Started on port 5000');
});
