import { useConvictions } from "../convictions/convictionProvider.js";
import { getCriminals, useCriminals } from "./criminalProvider.js";
import { criminal } from "./criminal.js";

const contentTarget = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

// export const criminalList = () => {
 
//   getCriminals().then( () =>
   
//     useCriminals().forEach((criminalObject) =>{
    
//     criminalObject =
//     `
     
//         <section class="criminal__data">
//         <div>
//           <h2>${criminalObject.name}</h2>
//           <p>Age: ${criminalObject.age}</p>
//           <p>Crime: ${criminalObject.conviction}</p>
//           <p>Term start:${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
//           <p>Term start: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')} </p>
//           </div>
//         </section>
      
//       ` 
//       contentTarget.innerHTML += criminalObject;
//     })
//   )
  
    
// }

//Listen for the custom event from convictionSelect
eventHub.addEventListener("crimeChosen", event =>{
  const crimeChosen = event.detail.crimeThatWasChosen
  
  
  if ( crimeChosen !== "0"){
   const matchingCriminals = useCriminals().filter(criminalFromList =>{ criminalFromList.contains(criminal.conviction === event.detail.crimeThatWasChosen)});
  return matchingCriminals
  
  } render (matchingCriminals)
  
})


const render = (appStateCriminals) => {
  const convertedCollection = appStateCriminals.filter(criminalObject =>{ 
    const criminals = criminal(criminalObject)
    contentTarget.innerHTML += criminals
   })
  
}

// render ALL criminals initially
export const criminalList = () => {
  getCriminals()
    .then(() =>{
      const appStateCriminals = useCriminals()
        render(appStateCriminals)
      
    })
}