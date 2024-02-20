function deleteDeck(deckId) {
  fetch("/delete-deck", {             //this will execute delete_deck() in views.py
    method: "POST",
    body: JSON.stringify({ deckId: deckId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

function deleteFlash(flashId) {
  fetch("/delete-flash", {             //this will execute delete_note() in views.py
    method: "POST",
    body: JSON.stringify({ flashId: flashId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

function fetchNote(noteId){
  fetch("/fetch-note", {
    method: "POST",
    body: JSON.stringify({noteId: noteId}),
  }).then((_res) => {
    console.log(noteId);
    window.location.href = "/";
  });
}


function bookstack(){
  window.location.href = "http://localhost:8080";

}

