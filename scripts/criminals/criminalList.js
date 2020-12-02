import { useConvictions } from "../convictions/convictionProvider.js";
import { getCriminals, useCriminals } from "./criminalProvider.js";

const contentTarget = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

export const criminalList = () => {
 
  getCriminals().then( () =>
   
    useCriminals().forEach((criminalObject) =>{
    
    criminalObject =
    `
     
        <section class="criminal__data">
        <div>
          <h2>${criminalObject.name}</h2>
          <p>Age: ${criminalObject.age}</p>
          <p>Crime: ${criminalObject.conviction}</p>
          <p>Term start:${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
          <p>Term start: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')} </p>
          </div>
        </section>
      
      ` 
      contentTarget.innerHTML += criminalObject;
    })
  )
  
    
}

//Listen for the custom event from convictionSelect
eventHub.addEventListener("crimeChosen", customEvent =>{
  //Use the property you added to the event detail
  if (customEvent.detail.crimeThatWasChosen !== "0"){
    // filter criminals application state
    const matchingCriminals = appStateCriminals.filter(criminal =>{
      return criminal.conviction
    })
    //invoke render
    render (matchingCriminals)
  }
})

const render = criminalCollection => {
  contentTarget.innerHTML = matchingCriminals
}

// render ALL criminals initially
export const criminalList = () => {
  getCriminals()
    .then(() =>{
      const appStateCriminals = useCriminals(
        render(appStateCriminals)
      )
    })
}