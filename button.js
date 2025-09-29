// Funktion til første knap
function myFunction() {
  document.getElementById("afsnit").textContent = "NNNEEEJ DU TRYKKEDE PÅ MIG";
}

// Knap med tæller
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};

// Input felt + live visning
const input = document.querySelector("input");
const log = document.getElementById("values");

if (input && log) {  // sikrer at elementerne findes i HTML
  input.addEventListener("input", updateValue);

  function updateValue(e) {
    log.textContent = e.target.value;
  }
}