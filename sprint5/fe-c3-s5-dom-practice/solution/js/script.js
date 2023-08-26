let noteList = [];

let view = "grid"; //default view is grid-view

//task-1 : define function `saveNote()` to add note
function saveNote(event) {
  event.preventDefault();
  console.log("adding");
  let noteId = document.getElementById("note-id").value;
  let noteTitle = document.getElementById("note-title").value;
  let noteContent = document.getElementById("note-content").value;

  if (noteId === "" || noteTitle === "" || noteContent === "") {
  
    return "Please fill in all the fields!";
  }
  
  if (noteList.some(note => note.id === noteId)) {
    
    return "Note ID must be unique!";
  }
  
  let newNote = {
    id: noteId,
    title: noteTitle,
    content: noteContent
  };

  noteList.push(newNote);
  console.log(noteList);
  //createProductCard(newNote);
  //clearFields();
  //alert("Note added successfully!");
  
  displayNotes();
}
//document.getElementById('add-note').addEventListener('click', saveNote); //this is dynamical action

//task-2 : define function `displayNotes()` to display all notes
function displayNotes() {
  let notesContainer = document.getElementById("note-container");
  notesContainer.innerHTML = "";

  for (let note of noteList) {
    let noteDiv = document.createElement("div");
    //noteDiv.className = "note-card";
    noteDiv.classList.add('note-card', 'm-auto', 'my-3');
    noteDiv.setAttribute('style', "width: 18rem");

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    
    let noteTitle = document.createElement("h3");
    noteTitle.textContent = note.title;
    cardHeader.appendChild(noteTitle);
    

    let noteBody = document.createElement('div');
    noteBody.classList.add('card-body');
    
    let noteContent = document.createElement("p");
    noteContent.classList.add('card-text');
    noteContent.textContent = note.content;
    noteBody.appendChild(noteContent);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.id = 'delete-button';
    deleteButton.type = 'button';
    deleteButton.style.backgroundColor = 'blue';
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.padding = '8px 16px';
    deleteButton.style.cursor = 'pointer';
    noteBody.appendChild(deleteButton);
   
    noteDiv.appendChild(cardHeader);
    noteDiv.appendChild(noteBody);

    notesContainer.appendChild(noteDiv);
    
  } 
}

// function toggleView() {
//   view = !view;
//   displayNotes();
// }

// document.getElementById('toggle-view').addEventListener('click', toggleView);


 
  


//window.addEventListener("load", displayNotes);

 
//task-3 : delete note - This task is Optional
function deleteNote() {
  console.log("inside delete")
  let noteIndex = noteList.findIndex(note => note.id === id);
  if (noteIndex !== -1) {
    noteList.splice(noteIndex, 1);
    //alert('Note deleted successfully');
    displayNotes();
  
}
}
 
//task-4 : toggle note view - This task is Optional
function toggleView() {
let notesContainer = document.getElementById("note-container");

  if ("grid"=== view) {
      notesContainer.classList.add('grid-view');
    } else {
      notesContainer.classList.remove('grid-view');
    }
}


// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    saveNote,
    displayNotes,
    deleteNote,
    toggleView
}






  
