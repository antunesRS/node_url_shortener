import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import dns from 'dns'
import Connection from './dataAccess/Connection'
import mongodb from 'mongodb'

var url = "mongodb://localhost:27017"

mongodb.connect(url, { useNewUrlParser: true })
          .then(client => {
          server.locals.db = client.db("url_repo")
      })

const con = new Connection("urls","url_repo")
const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

//default route
server.get("/", (_,res) => {
    const indexPath = path.join(__dirname, '../public/html', 'index.html')
    res.sendFile(indexPath)
});

//saving url route
server.post('/new', (req,res) => {
    let originalUrl = req.body.url
    
    try {
        originalUrl = new URL(req.body.url);
      } catch (err) {
        res.status(400).send({ error: 'invalid URL' });
      }
    
      dns.lookup(originalUrl.hostname, (err) => {
        if (err) {
          res.status(404).send({ error: 'Address not found' });
        }
      })
      const { db } = req.app.locals;
      con.findAndUpdate(db, originalUrl).then(result => {
        const doc = result.value;
        res.json({
          original_url: doc.original_url,
          short_id: doc.short_id,
        });
      }).catch(console.error);
})

// get saved url route
server.get('/:short_id', (req,res) => {
  const short_id = req.params.short_id
  const { db } = req.app.locals;
  con.findOne(db, short_id, res)
})

export default server