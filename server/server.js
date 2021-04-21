// LIBRARIES AND MODELS
const cors = require("cors");
const mongoose = require("mongoose");
const messageModel = require("./models/schema.js");

// CREATING SERVER & SOCKET
const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

// USING CORS
app.use(cors());

// GETTING DATA FROM THE FRONTEND
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONNECTING TO MONGOOSE
const url =
  "mongodb+srv://naveed:test1234@cluster0.s244r.mongodb.net/chatAppData?retryWrites=true&w=majority";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log(`CONNECTED TO DATABASE`);
  })
  .catch((error) => {
    console.log(error);
  });

// LISTING ON PORT 5000
app.get("/", (request, response) => {
  response.send("this is working");
});

// WEB SOCKETS
io.on("connection", (socket) => {
  // console.log('user connected')
  socket.on('disconnect',()=>{
    // console.log('user disconnected  ')
  })
  
// FEACTHING MESSAGES
  messageModel
    .find()
    .sort({ date: -1 })
    .then((result) => {
      socket.emit("allMessages",result);
    }).catch((error)=>{
      console.log(error)
    })

// ADDING MESSAGES
  socket.on('addMessage', (message) => {
    const newMessage = new messageModel(message);
    newMessage
      .save()
      .then((result) => {
        console.log('message added to server')
        io.emit('addMessagetoRedux',result)
      })
      .catch((error) => {
        console.log(error);
      });
  });

});

// LISTING ON PORT
server.listen(port, () => {
  console.log(`LISTING ON ${port}`);
});
