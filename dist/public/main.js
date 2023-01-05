const note = document.getElementById("formId");
const title = document.getElementById("title");
const descripcion = document.getElementById("descripcion");
note.addEventListener("submit", e => {
  e.preventDefault();
  if (editId !== "") {
    updateNote(title.value, descripcion.value, editId);
  } else {
    saveNote(title.value, descripcion.value);
  }
  title.value = '';
  descripcion.value = '';
});