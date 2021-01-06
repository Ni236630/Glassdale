export const NoteHTMLConverter = (noteObject) => {
  return `
      <section class="note">
          <div class="note__title">Title: ${ noteObject.criminalName }</div>
          <div class="note__text">${ noteObject.text }</div>
          <div class="note__author">Author: ${ noteObject.author }</div>
          <div class="note__timestamp">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
          <button id="deleteNote--${noteObject.id}">Delete</button>  
      </section>
  `
}