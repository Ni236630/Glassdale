import { getCriminals, useCriminals } from "./criminalProvider.js";

const contentTarget = document.querySelector(".criminalsContainer");
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
//let criminalListNew = [];
// const criminals = useCriminals();
// criminals.forEach(criminalObject =>{
//   criminalObject = `
//   <section class="criminal__card>
//     <div class="criminal__data">
//       <h2>${criminalObject.name}</h2>
//       <p>Age: ${criminalObject.age}</p>
//       <p>Crime: ${criminalObject.conviction}</p>
//       <p>Term start:${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
//       <p>Term start: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')} </p>
//     </div>
//   </section>
//   `
  
//   criminalListNew.push(criminalObject);
  
// })
//  return criminalListNew;