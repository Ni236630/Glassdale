// import { useCriminals } from "./criminalProvider"


export const criminal = criminalObject => {
  return `
  
   <section class="criminal__data">
    <div>
      <h2>${criminalObject.name}</h2>
        <p>Age: ${criminalObject.age}</p>
        <p>Crime: ${criminalObject.conviction}</p>
        <p>Term start:${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term start: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')} </p>
        <button id="associates--${criminalObject.id}">Associate Alibis</button>
    </div>
    </section>
     
  ` 
}

// const contentTarget = document.querySelector(".filters__alibi")
// const eventHub = document.querySelector(".container")

// eventHub.addEventListener("click", clickEvent => {
//   if (clickEvent.target.id.contains("associates--")){
//     const knownAssociate = `
//     <div class= "alibi">
//     <h3>${criminalObject.name}'s known associates</h3>
//     <p>Associate: ${criminalObject.known_associate.name}</p>
//     <p>Alibi: ${criminalObject.known_associate.alibi}</p>
//     </div>
//     `
//     return knownAssociate
    
//   }
//   eventHub.dispatchEvent(clickEvent)
// })