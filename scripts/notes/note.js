export const NoteHTMLConverter = (noteObject) => {
  return `
      <section class="note">
          <div class="note__title">Suspect: ${ noteObject.criminalName }</div>
          <div class="note__text">Note:${ noteObject.text }</div>
          <div class="note__author">Officer: ${ noteObject.author }</div>
          <div class="note__timestamp">Date of Note: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
          <button id="deleteNote--${noteObject.id}">Delete</button>  
      </section>
  `
}