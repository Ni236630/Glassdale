import { useConvictions } from "../convictions/convictionProvider.js";
import { getCriminals, useCriminals } from "./criminalProvider.js";
import { criminal } from "./criminal.js";

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
