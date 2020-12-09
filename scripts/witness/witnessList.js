import { useWitnesses, getWitnesses } from "./witnessProvider.js";

const contentTarget = document.querySelector(".witness__button");
const eventHub = document.querySelector(".container");


let appStateWitnesses = [];
export const witnessList = () => {
  getWitnesses().then(() => {
    appStateWitnesses = useWitnesses();
    return appStateWitnesses;
  });
};

export const witnessButton = () => {
  return (contentTarget.innerHTML = `
  <div>
    <button id="witness_show">Click me for Witness List</button>
  </div>  
  `);
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "witness__button") {
    const customEvent = new CustomEvent("witnessButtonClicked", {});
    eventHub.dispatchEvent(customEvent);
  }
});

// listening for witnessButton!
eventHub.addEventListener("witnessButtonClicked", customEvent => {
 Target.innerHTML = appStateWitnesses
});
