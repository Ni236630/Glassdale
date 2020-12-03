import { useOfficers,getOfficers } from "./officerProvider.js";

const contentTarget = document.querySelector(".filters__officer");
const eventHub = document.querySelector(".container");

export const officerSelect = () => {
  getOfficers().then(()=>
  
  contentTarget.innerHTML = `
  <select class="dropdown" id="officerSelect">
  <option value="0">Please select a crime...</option>
  ${
    useOfficers().map(officerObject => {
      const allOfficers = officerObject.name 
      return `<option>${allOfficers}</option>`
    })
  }
  </select>
  `
  )
}