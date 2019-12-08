const express = require("express");
const app = express();
app.use(express.json());

app.use('/api/listView', require('./routes/api/listView'));

app.use('/api/status', require('./routes/api/listView'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));