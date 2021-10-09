let express  = require("express");
let app = express();
console.log("I am running from the server");
// Load the page to the URL
app.get("/", (req,res) => {
	res.sendFile(__dirname + "/views/index.html");
})

//loading the css file
app.use("/public", express.static(__dirname + "/public"));
app.use("*/css", express.static(__dirname + "public/css"));
app.use("*/images", express.static("public/images"));

app.listen(8080,() => {
	console.log("Documentation is listening on 8080!");
})






module.exports = app;