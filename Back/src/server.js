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
})
