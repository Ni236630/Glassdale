
const contentTarget = document.querySelector(".noteFormContainer")



 const render = () =>{
  
  contentTarget.innerHTML = `
  <form action="">
   <p> <label>Officer Notes</label></P>
    <textarea id="note-text" placeholder="Enter Note Here" cols="33"></textarea>
   <p>Criminal Name: <input type="text" id="criminal-name"></input></p>
    <button id="saveNote"<Save Note</button>
  
  </form>
  `
  
  
  
}


export const noteForm = () =>{
  render()
}