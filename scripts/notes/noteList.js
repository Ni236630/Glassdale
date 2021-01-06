import { getNotes, useNotes, deleteNote } from "./noteDataProvider.js";
import { NoteHTMLConverter } from "./note.js";
import { useCriminals } from "../criminals/criminalProvider.js";

const contentTarget = document.querySelector(".noteList");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("showNotesClicked", () => {
  NoteList();
});
eventHub.addEventListener("noteStateChanged", () => {
  NoteList();
});

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id)
       
    }
})






const render = (noteArray, criminals) => {
    
  const NotesAsStrings = noteArray
    .map((note) => {
      // Find the related criminal
      const relatedCriminal = criminals.find((criminal) => {
        return criminal.id === note.criminalId;
      });
      note.criminalName = relatedCriminal.name;
      return NoteHTMLConverter(note);
    })
    .join("");
  contentTarget.innerHTML = NotesAsStrings;
};

export const NoteList = () => {
  let criminals = useCriminals();
  getNotes().then(() => {
    const allNotes = useNotes();
    render(allNotes, criminals);
  });
};

