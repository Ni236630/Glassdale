import { useOfficers,getOfficers } from "./officerProvider.js";

const contentTarget = document.querySelector(".filters__officer");
const eventHub = document.querySelector(".container");

export const officerSelect = () => {
  
  getOfficers().then(()=>
  
  contentTarget.innerHTML = `
  <select class="dropdown" id="officerSelect">
  <option value="0">Please select an officer...</option>
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
//listening with the eventHub
eventHub.addEventListener("change", changeEvent =>{
  //Only if the officerSelect element as change
  if (changeEvent.target.id === "officerSelect"){
    //custom event start here
    const customEvent = new CustomEvent("officerSelected", {
      detail: {
        officer: changeEvent.target.value
      }
    })
    //dispatch this!!!
    eventHub.dispatchEvent(customEvent)
  }
})