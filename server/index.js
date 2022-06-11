const express = require('express');
require('./db/db');
const userRouter = require('./routers/userRouter');
const adminRouter = require('./routers/adminRouter');
const cors = require('cors');

require("./routers/cert");


const app = express();
const port = process.env.PORT || 443;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(adminRouter);



app.listen(port,() => {
    console.log('Server Started on port' + port);
});
