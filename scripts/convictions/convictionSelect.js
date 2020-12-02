import { useConvictions, getConvictions } from "./convictionProvider.js";



const contentTarget = document.querySelector(".filters__crime");

export const convictionSelect = () => {
  
  getConvictions().then(() =>

  contentTarget.innerHTML = `
<select class="dropdown" id="crimeSelect">
  <option value="0">Please select a crime...</option>
  ${
    useConvictions().map(crimeObject =>{
      const allCrimes = crimeObject.name
      return `<option>${allCrimes}</option>`
    })
  }
</select>
`
  )
}