

export const facilityHTML = (criminals,facilityObject) => {
  
  return `
  <div class="facility__data">
  <h4>${facilityObject.facilityName}</h4>
  <div class="facility__details">
      <p>Security Level: ${facilityObject.securityLevel}</p>
      <p>Capacity: ${facilityObject.capacity}</p>
      <div>
          <h2>Criminals</h2>
          
          <ul>${criminals.map(c => `<li>${c.name}</li>`).join("")}</ul>
          
          
      </div>
  </div>
</div>
  `
  
  
}
