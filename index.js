let express  = require("express");
let app = express();

// Load the page to the URL
app.get("/", (req,res) => {
	res.sendFile(__dirname + "/views/index.html");
})

//loading the css file
app.use(express.static(__dirname + "/public"));
app.use("*/css", express.static(__dirname + "public/css"));
app.use("*/images", express.static(__dirname + "public/images"));


const port = process.env.PORT || 3000 ;
app.listen(port, ()=>{
	console.log("Documentation app is listening on port" + port + "!");
})