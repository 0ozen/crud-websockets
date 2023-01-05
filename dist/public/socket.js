const socket = io();
let editId = '';
const saveNote = (title, descripcion) => {
  socket.emit("client:note", {
    title,
    descripcion
  });
};
socket.on("server:notes", notes => {
  renderNotes(notes);
});
socket.on("server:note", note => {
  renderNote(note);
});
const deleteNote = id => {
  socket.emit("client:deletenote", id);
};
const editNote = id => {
  socket.emit("client:editnote", id);
};
socket.on("server:edit", note => {
  let title = document.querySelector("#title");
  let descripcion = document.querySelector("#descripcion");
  title.value = note.title;
  descripcion.value = note.descripcion;
  editId = note.id;
  title.focus();
});
const updateNote = (title, descripcion, id) => {
  socket.emit("client:updatenote", {
    title,
    descripcion,
    id
  });
  editId = '';
};