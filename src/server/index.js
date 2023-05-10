import React from "react";

const express = require("express");
import {createRequest} from "@/server/createRequest";

const app = express();

app.use(express.static('dist'));

const PORT = 5000;

app.get('*', async (req, res) => {
    const html = await createRequest(req)
    res.send(html)
})

app.listen(PORT, () => {
    console.log(`app listen: ${PORT}`);
});