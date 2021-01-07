import { criminalList } from "./criminals/criminalList.js";
import { convictionSelect } from "./convictions/convictionSelect.js";
import { officerSelect } from "./officers/officerSelect.js";
import { noteForm } from "./notes/noteForm.js";
import { ShowNoteButton } from "./notes/showNotesButton.js";
import "./notes/noteList.js"
import "./associateAlibi/alibiList.js"
import { witnessButton } from "./witness/witnessList.js";


officerSelect();
criminalList();
convictionSelect();
noteForm();
ShowNoteButton();
witnessButton();

