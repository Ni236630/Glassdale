
import { alibi } from "./albi.js";
import { useCriminals  } from "../criminals/criminalProvider.js";

const contentTarget = document.querySelector(".filters__alibi")
const eventHub = document.querySelector(".container")


// listen for button press... return associate & alibi
eventHub.addEventListener("associateButtonPressed", customEvent =>{
  if(customEvent.detail.criminalAssociate !== "0"){
    const criminals = useCriminals()
    const detail = parseInt(customEvent.detail.criminalsAssociate)
    const associate = criminals.find((criminal) =>{
      return criminal.id === detail
    
    })
      
     contentTarget.innerHTML = alibi(associate)
}
})

