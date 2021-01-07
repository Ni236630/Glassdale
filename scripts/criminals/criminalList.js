import { getCriminals, useCriminals } from "./criminalProvider.js";
import { criminal } from "./criminal.js";
import { witnessList } from "../witness/witnessList.js";
import { getFacilities, useFacilities } from "../facility/facilityProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facility/criminalFacilityProvider.js";

const contentTarget = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

let facilities = []
let crimFac = []
let criminals = []
/*


Event listeners 


*/
//Listen for the custom event from convictionSelect
eventHub.addEventListener("crimeChosen", (customEvent) => {
  const crimeChosen = customEvent.detail.crimeThatWasChosen;

  if (crimeChosen !== "0") {
    const matchingCriminals = criminals.filter((criminalFromList) => {
      return criminalFromList.conviction === crimeChosen;
    });

    render(matchingCriminals,crimFac,facilities);
  }
});


//Listen for the custom event from officerSelect

eventHub.addEventListener("officerSelected", (event) => {
  const officerSelected = event.detail.officer;

  if (officerSelected !== "0") {
    const matchingOfficer = criminals.filter((criminalFromList) => {
      return criminalFromList.arrestingOfficer === officerSelected;
    });

    render(matchingOfficer,crimFac,facilities);
  }
});

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "associates") {
    const associateButton = new CustomEvent("associateButtonPressed", {
      detail: {
        criminalsAssociate: clickEvent.target.value,
      },
    });
    eventHub.dispatchEvent(associateButton);
  }
})


// const witnesses = witnessList();

let appStateCriminals = [];
// render ALL criminals initially
export const criminalList = () => {
  getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(
      () => {
         facilities = useFacilities()
         crimFac = useCriminalFacilities()
         criminals = useCriminals()
        
        render(criminals,crimFac,facilities)
      }
    )}


    const render = (criminalsToRender, allRelationships, allFacilities) => {
      // Step 1 - Iterate all criminals
      contentTarget.innerHTML = criminalsToRender.map(
          (criminalObject) => {
              // Step 2 - Filter all relationships to get only ones for this criminal
              const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)
  
              // Step 3 - Convert the relationships to facilities with map()
              const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                  const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                  return matchingFacilityObject
              })
  
              // Must pass the matching facilities to the Criminal component
              return criminal(criminalObject, facilities)
          }
      ).join("")
  }