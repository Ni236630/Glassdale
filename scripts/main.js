import { useOfficers } from "./officers/officerProvider.js";
import { useCriminals } from "./criminals/criminalProvider.js";
import { criminalList } from "./criminals/criminalList.js";
import { useConvictions, getConvictions } from "./convictions/convictionProvider.js";
import { convictionSelect } from "./convictions/convictionSelect.js";
import { officerSelect } from "./officers/officerSelect.js";
import { noteForm } from "./notes/noteForm.js";
import { ShowNoteButton } from "./notes/showNotesButton.js";
import "./notes/noteList.js"
import "./associateAlibi/alibiList.js"


officerSelect();
useOfficers();
useCriminals();
criminalList();
useConvictions();
getConvictions();
convictionSelect();
noteForm();
ShowNoteButton();


// const contentTarget = document.querySelector(".criminalsContainer");
// contentTarget.innerHTML = criminalHTML;