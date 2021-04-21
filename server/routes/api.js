const express = require("express");
const router = express.Router();
const messageModel = require("../models/schema.js");

router.get("/", (request, response) => {
  messageModel.find()
    .sort({ date: -1 })
    .then((result) => {
      response.json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/", (request,response) => {
  const newMessage = new messageModel({
    text:request.body.newMessage.text,
    from:request.body.newMessage.from,
    to:request.body.newMessage.to
  });
  newMessage
    .save()
    .then((result) => {
      // io.emit('message', req.body);
      response.json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
