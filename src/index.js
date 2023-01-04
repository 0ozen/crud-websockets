import express from "express";
import { Server } from "socket.io";
import url from "url";
import http from "http";
import { v4 as uuid } from "uuid";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();
const serverHTTP = http.createServer(app);
const io = new Server(serverHTTP);

app.use(express.static(__dirname + "/public"));

let noteList = [];

io.on("connection", (socket) => {
	console.log("new connection", socket.id);

	if (noteList.length > 0) socket.emit("server:notes", noteList);

	socket.on("client:note", (data) => {
		const note = { ...data, id: uuid() };
		noteList.push(note);

		io.emit("server:note", note);
	});

	socket.on("client:deletenote", (id) => {
		noteList = noteList.filter((note) => note.id !== id);
		io.emit("server:notes", noteList);
	});

	socket.on("client:editnote", (id) => {
		socket.emit(
			"server:edit",
			noteList.find((note) => note.id === id)
		);
	});

	socket.on("client:updatenote", (data) => {
		noteList = noteList.map((note) => {
			if (note.id === data.id) {
				note.title = data.title;
				note.descripcion = data.descripcion;
			}
			return note;
		});
    console.log(noteList);
		io.emit("server:notes", noteList);
	});
});

serverHTTP.listen(3000);
console.log("server listening on port", 3000);
