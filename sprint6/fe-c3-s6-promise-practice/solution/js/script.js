//const { default: axios } = require("axios");

let noteList = [];

let view = "grid"; //default view is grid-view

const todoURL = "http://localhost:3000/todos";

//task-1 : add note
function saveNote(event) {
  event.preventDefault();
  
        let noteId = document.getElementById('note-id').value;
        let noteTitle = document.getElementById('note-title').value;
        let noteContent = document.getElementById('note-content').value;
      
        if (noteId === '' || noteTitle === '' || noteContent === '') {
          
          return "Please fill in all fields";
        }
      
        if (noteList.some(note => note.id === noteId)) {
          
          return "Note ID must be unique";
        }
      
        
      
    //const note = null;

    //populate note object with data from HTML
    let note = {
      id: noteId,
      title: noteTitle,
      content: noteContent
    };

    // call saveNoteToServer() with note data to persist note to the server
    saveNoteToServer(note);
}



function saveNoteToServer(note) {
  let postPromise=axios.post(todoURL, note);
    // use axios to make HTTP POST request to save note to server
    // the saved note should also be pushed to noteList array and displayed on the web page
   return postPromise.then(response => {
        console.log(response.data);
      noteList.push(note);
      alert('Note added successfully');
      displayNotes();
    })
    .catch(error => {
      alert(`An error occurred while saving the note: ${error}`);
    });
}

//task-2 : display notes
function displayNotes() {
    // call fetchNotesFromServer() to fetch notes from server and display the notes
    fetchNotesFromServer();    
} 

function fetchNotesFromServer() {
     // use axios to make HTTP GET request to fetch notes from server
    // the fetched notes should also be pushed to the noteList array and displayed on the web page
  const getPromise = axios.get(todoURL);

    let notesContainer = document.getElementById("note-container");
  // notesContainer.innerHTML = "";

  getPromise.then((response) =>{
              response.data.forEach(post =>{
                      
                        let noteDiv = document.createElement("div");
                        //noteDiv.className = "note-card";
                        noteDiv.classList.add('note-card', 'm-auto', 'my-3');
                        noteDiv.setAttribute('style', "width: 18rem");

                        let cardHeader = document.createElement('div');
                        cardHeader.classList.add('card-header');

                        let noteTitle = document.createElement("h3");
                        noteTitle.textContent = `${post.title}`;
                        cardHeader.appendChild(noteTitle);
                        
                        let noteBody = document.createElement('div');
                        noteBody.classList.add('card-body');
                        
                        let noteId = document.createElement('p');
                        noteId.classList.add('card-text');
                        noteId.textContent = `${post.id}`;
                        noteBody.appendChild(noteId);
                        
                        let noteContent = document.createElement("p");
                        noteContent.classList.add('card-text');
                        noteContent.textContent = `${post.content}`;
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

                        deleteButton.addEventListener('click', () => {
                          // Call the deleteNote function and pass the deleteButton and noteId as arguments
                          deleteNote(deleteButton, `${post.id}`);
                        });

                        
                        noteBody.appendChild(deleteButton);
                      
                        noteDiv.appendChild(cardHeader);
                        noteDiv.appendChild(noteBody);

                        notesContainer.appendChild(noteDiv);

                          
              })  

    })
    .catch(()=>{
      console.log("Failure!!");
    })
}

//task-3 : delete note
function deleteNote(button, noteId) {
    // Send a DELETE request to the server with the ID of the note
    axios.delete(`${todoURL}/${noteId}`)
    .then(response => {
      console.log(response.data);
      // If the request was successful, remove the note from the page
      button.closest('.note-card').remove();
      alert('Note deleted Successfully');
    })
    .catch(error => {
      alert('An error occurred while deleting the note');
    });
    
}
 
//task-4 : toggle note view
function toggleView() {
  const noteContainer = document.getElementById('note-container');

  if (view === "grid") {
    noteContainer.style.display = "flex";
    //noteContainer.style.flexDirection = "column";
    view = "list";
  } 
  else {
    noteContainer.style.display = "grid";
    view = "grid";
  }
    
}

//do not delete the code given below, it is written to make export the functions to be tested
module.exports = {
    saveNote,
    displayNotes,
    deleteNote,
    toggleView,
    saveNoteToServer,
    fetchNotesFromServer
}

