import { saveNote } from "./noteDataProvider.js"
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")



 const render = () =>{
  
  contentTarget.innerHTML = `
  <div class="note__form">
   <p> <label>Officer Notes</label></P>
   <textarea id="text" placeholder="Enter Note Here" cols="50"></textarea>
   <p>Criminal Name: <input type="text" id="suspect"></input></p>
   <p>Authoring Officer: <input type"text" id ="author"</input>
    <button id="saveNote">Save Note</button>
 </div>
  `
  

}



eventHub.addEventListener("click",clickEvent =>{
  if (clickEvent.target.id === "saveNote"){
    
  const author =  document.querySelector("#author").value
  const suspect = document.querySelector("#suspect").value
  const text = document.querySelector("#text").value
  
  const newNote = {
    author: author,
    text: text,
    suspect: suspect,
    date: Date.now()
  }
  
  saveNote(newNote)
  document.querySelector("#author").value = ""
  document.querySelector("#suspect").value = ""
  document.querySelector("#text").value = ""
  }
})

export const noteForm = () =>{
  render()
}