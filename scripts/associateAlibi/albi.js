


export const alibi = criminalObject => {
  return `
  <section class="associate__alibi">
    <div>
      <h2>${criminalObject.name}'s known associate</h2>
        <p>Name: ${criminalObject.known_associates[0].name}</p>
        <p>Alibi: ${criminalObject.known_associates[0].alibi}</p>
      </div>
    </section>
     
  `  
}

