function deleteDeck(deckId) {
  fetch("/delete-deck", {             //this will execute delete_deck() in views.py
    method: "POST",
    body: JSON.stringify({ deckId: deckId }),
  }).then((_res) => {
    window.location.href = "/managedecks";
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
// I believe .js is only needed for POSTS when wanting to write to the db
function fetchFlash(flashId){
  fetch("/fetch-flash", {
    method: "POST",
    body: JSON.stringify({flashId: flashId}),
  }).then((_res) => {
    console.log(flashId);
    window.location.href = "/";
  });
}

// USed to toggle show/hide the list of flashcards belonging to referenced deck. 
// with new menu setup this is not needed
function fetchDeck(deckTitle){
  
  var flash_list = document.getElementById(deckTitle);
  if(flash_list.style.display === "none"){
    flash_list.style.display = "block"
  } else{
    flash_list.style.display = "none"
  }
 

}
// I believe .js is only needed for POSTS when wanting to write to the db
function fetchDeck2(deckTitle){
  console.log(deckTitle);
  fetch("/managesingledeck/<deckTitle>", {
    method: "POST",
    body: JSON.stringify({deckTitle: deckTitle}),
  }).then((_res) => {
    // window.location.href = "/managesingledeck/<deckTitle>";
  });
}










//this "flips" the flash card by hiding one side and showing the other
function flipFlash() {
  var card = document.getElementById("flashcard");
  card.classList.toggle('is-flipped');
  
}

// const card = document.querySelector('.card');
// const buttons = document.querySelectorAll('button')
// buttons.forEach(button => {
//   button.addEventListener('click', () => card.classList.toggle('is-flipped'))
// });


// cheap way to link to bookstack on port 8080 when I have it running, though there is much better eways to do this. 
// function bookstack(){
//   window.location.href = "http://localhost:8080";

// }




// stole this from https://phuoc.ng/collection/html-dom/make-a-text-area-auto-expand/
  // const textareaEle = document.getElementById('f_title_textarea');
  // textareaEle.addEventListener('input', () => {
  //     // textareaEle.style.height = 'auto';      //  not sure why this is here. 
  //     textareaEle.style.height = `${textareaEle.scrollHeight}px`;
  // });
// will autosize a textarea  with specifc id automatically
// had to make a lot of modifications to fit multiple text boxes in a grid.  
document.addEventListener('DOMContentLoaded', () => {

  const grid_mta = document.querySelectorAll(".grid_main_textarea");
  grid_mta.forEach(g_mta => {
    g_mta.addEventListener("input", () => {
      g_mta.style.height = '6.1em';
      g_mta.style.height = `${g_mta.scrollHeight}px`;
    })

  })

  const header_ta = document.querySelectorAll(".header");
  header_ta.forEach(h_ta => {
    h_ta.addEventListener("input", () => {
      // h_ta.style.height = '2';
      h_ta.style.height = `${h_ta.scrollHeight}px`;

    })

  })
});


// how to do a popup
function deck_title_popup() {


  let text;
  let deckTitle = prompt("Please enter Kwik Deck Title:", "");
  if (deckTitle == null || deckTitle == "") {
    window.location.href = "/managedecks";
  } 
  document.getElementById("new_deck_title").innerHTML = deckTitle;
  // window.location.href = "/managesingledeck/<deckTitle>";


}
