const express = require("express");
const app = express();
app.use(express.json());

app.use('/api/listView', require('./routes/api/listView'));


app.listen(5000);