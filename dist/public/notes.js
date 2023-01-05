const list = document.getElementById("list");
const addNote = (title, descripcion, id) => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="shadow-md shadow-slate-500 bg-slate-700 rounded-xl min-w-400 h-16 py-2 px-4 mx-1 animate__animated animate__fadeInUp">
    <div class="flex justify-between space-x-10">
      <h2 class="max-w-sm rounded-xl">${title}</h2>
      <div>
        <button data-id="${id}" class="btnEdit text-black bg-emerald-600 px-3 rounded-md">Edit</button>
        <button data-id="${id}" class="btnDelete text-white bg-red-600 px-3 rounded-md ">Delete</button>
      </div>
    </div> 
    <p class="rounded-xl truncate" >${descripcion}</p>
  </div>
  `;
  const btnDelete = div.querySelector(".btnDelete");
  const btnEdit = div.querySelector(".btnEdit");
  btnDelete.addEventListener("click", () => {
    deleteNote(btnDelete.dataset.id);
  });
  btnEdit.addEventListener("click", () => {
    editNote(btnEdit.dataset.id);
  });
  return div;
};
const renderNote = note => {
  list.append(addNote(note.title, note.descripcion, note.id));
};
const renderNotes = notes => {
  list.innerHTML = "";
  notes.forEach(note => list.append(addNote(note.title, note.descripcion, note.id)));
};