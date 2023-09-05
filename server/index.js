const http = require ("http")
const characters = require("./src/utils/data")

http
.createServer((req, res) => {
    
    const {url} = req;
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(url.includes("rickandmorty/character")) {
  let urlId = url.split("/").pop(); // [ "rickandmorty", "character", "1"] Con pop sacamos el ultimo elemento del array
  let found = characters.find(
    (character) => character.id === Number(urlId)
);

res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify(found));
}
} )
.listen(3001);