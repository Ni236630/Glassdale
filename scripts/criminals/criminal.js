

export const criminal = criminalObject => {
  return `
  
   <section class="criminal__data">
    <div>
      <h2>${criminalObject.name}</h2>
        <p>Age: ${criminalObject.age}</p>
        <p>Crime: ${criminalObject.conviction}</p>
        <p>Term start:${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term start: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')} </p>
        <button id="associates" value = ${criminalObject.id}>Associate Alibis</button>
    </div>
    </section>
     
  ` 
}

