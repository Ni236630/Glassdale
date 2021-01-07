


export const alibi = criminalObject => {
  return `
  <section class="associate__alibi">
    <div>
      <h2>${criminalObject.name}'s known associate</h2>
      ${criminalObject.known_associates.map((associate) => `
      <h4>${associate.name}</h4>
      <div>${associate.alibi}</div>`
      ).join("")}
    </div>
  </section>
  `
}
  

