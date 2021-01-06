import { useCriminals, getCriminals } from "../criminals/criminalProvider.js";
import { saveNote } from "./noteDataProvider.js";

const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".container");

const render = () => {
  contentTarget.innerHTML = `
  <div class="note__form">
    <p> <label>Officer Notes</label></P>
    <textarea id="text" placeholder="Enter Note Here" cols="50"></textarea>
    <div> 
     <select class="dropdown" id="criminalSelect">
       <option value="0">Please select a criminal...</option>
       ${useCriminals().map((criminalObject) => {
         const allCriminals = criminalObject.name;
         return `
        <option value=${criminalObject.id}>
         ${allCriminals}
        </option>`;
       })}
  </select>
 </div>
   <p>Authoring Officer: <input type"text" id ="author"</input>
    <button id="saveNote">Save Note</button>
 </div>
  `;
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    const author = document.querySelector("#author").value;
    const criminalId = parseInt(document.querySelector("#criminalSelect").value);
    const text = document.querySelector("#text").value;

    const newNote = {
      author,
      text,
      criminalId,
      date: Date.now(),
    };

    saveNote(newNote);
    document.querySelector("#author").value = "";
    document.querySelector("#criminalId").value = "";
    document.querySelector("#text").value = "";
  }
});

export const noteForm = () => {
  getCriminals().then(() => render());
};
