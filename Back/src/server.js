require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


/*
!REVISAR
const http = require('http');
import character from ('.utils/data');

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url.includes('rickandmorty/character')) {
    let id = req.url.split('/').at(-1)
    
    let characterFilter = character.find(char => char.id === -Numebr(id))

      res
      .writeHead(200, {'Content-Type': 'application/json'})
      .end(JSON.stringify(characterFilter))
  }
   /* } else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Character not found');
    }
    res
      writeHead(404, {'Content-Type': 'text/plain'});
      end('Invalid endpoint');
  }).listen(3001,'localhost')*/
