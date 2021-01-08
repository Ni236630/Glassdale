
/*

variables

*/


const contentTarget = document.querySelector(".facility__button")
const facilityTarget = document.querySelector(".facilityContainer")

const clickTarget = document.querySelector(".criminalsContainer")

const eventHub = document.querySelector(".container")

/*

function to export

*/
export const facilityButton = () => {
  contentTarget.innerHTML = `
  <button id="viewFacilities">View Facilities</button>
  `
}


/*

click Events To Change Display

*/

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "viewFacilities") {
    /*
    
    If statement to change display state
    
    */
    if (clickTarget.style.display === "none"){
      clickTarget.style.display = ""
      
      facilityTarget.style.display = "none"
      
      contentTarget.innerHTML =`<button id="viewFacilities">View Facilities
    </button>`
    
    } else {
      facilityTarget.style.display = ""
      
    clickTarget.style.display = "none"
    
    contentTarget.innerHTML = `<button id="viewFacilities">View Criminals
    </button>`
    }
  }
})
