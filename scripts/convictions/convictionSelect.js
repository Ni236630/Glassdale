import { useConvictions, getConvictions } from "./convictionProvider.js";



const contentTarget = document.querySelector(".filters__crime");
const eventHub = document.querySelector(".container");

export const convictionSelect = () => {
  
  getConvictions().then(() =>

  contentTarget.innerHTML = `
<select class="dropdown" id="crimeSelect">
  <option value="0">Please select a crime...</option>
  ${
    useConvictions().map(crimeObject =>{
      const allCrimes = crimeObject.name
      return `<option>${allCrimes}</option>`
    })
  }
</select>
`
  )
}


//listening with the eventHub
eventHub.addEventListener("change", event => {
  //Only this 'if' the "crimeSelect" element was changed
  if (event.target.id === "crimeSelect"){
    //Create custom event.
    const customEvent = new CustomEvent("crimeChosen", {
      detail: {
        crimeThatWasChosen: event.target.value
      }
    })
    //Dispatch this to eventHub in main.js
    eventHub.dispatchEvent(customEvent)
  }
})