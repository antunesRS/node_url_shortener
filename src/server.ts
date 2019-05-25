import express from 'express'

const server = express()

server.get("/", (_,res) => {
    res.send("Everything seems ok here...")
});

export default server