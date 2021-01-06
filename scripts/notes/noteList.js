import { getNotes, useNotes } from "./noteDataProvider.js";
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
