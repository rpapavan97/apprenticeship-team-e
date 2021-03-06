const mongoose = require("mongoose");
// const url =
// 	"mongodb+srv://instaclone:instaclone@project.hhes2.mongodb.net/instaclone?retryWrites=true&w=majority";

const url = "mongodb://127.0.0.1:27017/InstaClone";

mongoose.connect(process.env.MONGODB_URI || url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", (_) => {
	console.log("Database connected:", url);
});

db.on("error", (err) => {
	console.error("connection error:", err);
});
