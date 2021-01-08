import { getCriminals, useCriminals } from "../criminals/criminalProvider.js";
import { getFacilities, useFacilities } from "./facilityProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./criminalFacilityProvider.js";
import { facilityHTML } from "./facility.js";

/*

Variables for selecting content and setting state of app

*/

const contentTarget = document.querySelector(".facilityContainer");
const eventHub = document.querySelector(".container");

let facilities = []
let crimFac = []
let criminals = []
/*


Event listeners 


*/
// Listen for the custom event from facilityButton
// eventHub.addEventListener("facilityButtonPressed", (customEvent) => {
//   const crimeChosen = customEvent.detail.crimeThatWasChosen;

//   if (crimeChosen !== "0") {
//     const matchingCriminals = criminals.filter((criminalFromList) => {
//       return criminalFromList.conviction === crimeChosen;
//     });

//     render(matchingCriminals,crimFac,facilities);
//   }
// });


// //Listen for the custom event from officerSelect

// eventHub.addEventListener("officerSelected", (event) => {
//   const officerSelected = event.detail.officer;

//   if (officerSelected !== "0") {
//     const matchingOfficer = criminals.filter((criminalFromList) => {
//       return criminalFromList.arrestingOfficer === officerSelected;
//     });

//     render(matchingOfficer,crimFac,facilities);
//   }
// });

// eventHub.addEventListener("click", (clickEvent) => {
//   if (clickEvent.target.id === "associates") {
//     const associateButton = new CustomEvent("associateButtonPressed", {
//       detail: {
//         criminalsAssociate: clickEvent.target.value,
//       },
//     });
//     eventHub.dispatchEvent(associateButton);
//   }
// })


// const witnesses = witnessList();


// render ALL criminals initially
export const facilityList = () => {
  getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(
      () => {
         facilities = useFacilities()
         crimFac = useCriminalFacilities()
         criminals = useCriminals()
        
        render(facilities,criminals,crimFac)
      }
    )}


    const render = (allFacilities,criminalsToRender, allRelationships) => {
     
      // Step 1 - Iterate all facilities
      contentTarget.innerHTML = allFacilities.map(
          (facilityObject) => { 
           
              // Step 2 - Filter all relationships to get only ones for this facility
              const criminalRelationshipsForThisFacility = allRelationships.filter(cf => cf.facilityId === facilityObject.id)
   
              // Step 3 - Convert the relationships to criminals with map()
              const criminals = criminalRelationshipsForThisFacility.map(cf => {
                
                  const matchingCriminalObject = criminalsToRender.find(criminal => criminal.id === cf.criminalId)
                  return matchingCriminalObject
              })
  
              // Must pass the matching facilities to the Criminal component

              return facilityHTML(criminals,facilityObject)
          }
      ).join("")
  }