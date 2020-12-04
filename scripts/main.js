import { useOfficers } from "./officers/officerProvider.js";
import { useCriminals } from "./criminals/criminalProvider.js";
import { criminalList } from "./criminals/criminalList.js";
import { useConvictions, getConvictions } from "./convictions/convictionProvider.js";
import { convictionSelect } from "./convictions/convictionSelect.js";
import { officerSelect } from "./officers/officerSelect.js";


officerSelect();
useOfficers();
useCriminals();
criminalList();
useConvictions();
getConvictions();
convictionSelect();


// const contentTarget = document.querySelector(".criminalsContainer");
// contentTarget.innerHTML = criminalHTML;