import { useConvictions } from "../convictions/convictionProvider.js";
import { getCriminals, useCriminals } from "./criminalProvider.js";
import { criminal } from "./criminal.js";
import { officerSelect } from "../officers/officerSelect.js";

const contentTarget = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");




          

//Listen for the custom event from convictionSelect
eventHub.addEventListener("crimeChosen", customEvent =>{
  const crimeChosen = customEvent.detail.crimeThatWasChosen
 
  
  if ( crimeChosen !== "0"){
   
   const matchingCriminals = appStateCriminals.filter(criminalFromList => { 
    
    return  criminalFromList.conviction === crimeChosen
     
    })
   
    render(matchingCriminals)

  } 
   
})

//Listen for the custom event from officerSelect
eventHub.addEventListener("officerSelected", event =>{
  const officerSelected = event.detail.officer
  
  
  if(officerSelected !== "0"){
    
    const matchingOfficer = appStateCriminals.filter(criminalFromList => {
      
      return criminalFromList.arrestingOfficer === officerSelected
      
    })
    
    render(matchingOfficer)
  }
})


let appStateCriminals = []
// render ALL criminals initially
export const criminalList = () => {
  getCriminals()
    .then(() =>{
       appStateCriminals = useCriminals()
      render(appStateCriminals)
      
    })
  }
  
const render = criminalCollection => {
  
    
    contentTarget.innerHTML = `${criminalCollection.map(criminalPerson =>
      criminal(criminalPerson)
    ).join("")}
  `
  
}
