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