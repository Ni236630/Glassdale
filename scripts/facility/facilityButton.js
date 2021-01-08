
/*

variables

*/


const contentTarget = document.querySelector(".facility__button")

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

Custom Events to Dispatch

*/

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "viewFacilities") {
    const facilityButton = new CustomEvent("facilityButtonPressed", {
      detail: {
        facility: clickEvent.target.value,
      },
    });
    eventHub.dispatchEvent(facilityButton);
    /*
    
    If statement to change display state
    
    */
    if (clickTarget.style.display === "none"){
      clickTarget.style.display = ""
      contentTarget.innerHTML =`<button id="viewFacilities">View Facilities
    </button>`
    
    } else {
    clickTarget.style.display = "none"
    contentTarget.innerHTML = `<button id="viewFacilities">Show Criminals
    </button>`
    }
  }
})
