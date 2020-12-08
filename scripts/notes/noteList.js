import { getNotes, useNotes } from "./noteDataProvider.js";
import { NoteHTMLConverter } from "./note.js";


const contentTarget = document.querySelector(".noteList")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", () => {
    NoteList()
})
eventHub.addEventListener("noteStateChanged", () =>{
  NoteList()
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map((note) =>  NoteHTMLConverter(note) ).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}


export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}