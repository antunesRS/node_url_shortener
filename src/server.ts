import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import Connection from './connection/Connection'
import Link from './model/Link'
 import dns from 'dns'
import nanoid from 'nanoid'

//const databaseUrl : string = process.env.DATABASE || "mongodb://localhost:27017";
const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.get("/", (_,res) => {
    const indexPath = path.join(__dirname, '../public/html', 'index.html')
    res.sendFile(indexPath)
});

server.post('/new', (req,res) => {
    let originalUrl = req.body.url

    try {
        originalUrl = new URL(req.body.url);
      } catch (err) {
        return res.status(400).send({ error: 'invalid URL' });
      }
    
      dns.lookup(originalUrl.hostname, (err) => {
        if (err) {
          return res.status(404).send({ error: 'Address not found' });
        }
        else
            return null
      });

    Connection.createConnection().then(async con => {
        console.log(originalUrl)
        let shortId = nanoid(7)
        console.log(shortId)
        let newUrl = `${shortId}`
        console.log(newUrl)
        var link = new Link(0, originalUrl, newUrl, shortId)

        let linkRepository = con.getRepository(Link)
        await linkRepository.save(link)
        console.log("Link has been saved")

        res.json({new_url: newUrl, short_id: shortId})
    }).catch(error => console.log(error));

    return null
})

export default server