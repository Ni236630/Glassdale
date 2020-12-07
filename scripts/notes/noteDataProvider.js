
let notes = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
  const noteStateChangedEvent = new CustomEvent("noteStateChanged")
  
  eventHub.dispatchEvent(noteStateChangedEvent)
}



export const useNotes = () =>{
 return  notes.slice()
}



export const getNotes = () =>{
  
  return fetch("http://localhost.8088/notes")
  .then(response =>response.json())
  .then(
    parsedNotes => {
      notes = parsedNotes
    }
    )
}

export const saveNote = note => {
  return fetch('http://localhost:8088/notes',{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
  })
  .then(getNotes)
  .then(dispatchStateChangeEvent)
}


//saving note function here!!!!
eventHub.addEventListener("click",clickEvent =>{
  if (clickEvent.target.id === "saveNote"){
    const newNote = {
    
      text:"",
      suspect:"",
      id: 1++
      
    }
    saveNote(newNote)
  }
})
