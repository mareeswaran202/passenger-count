const incrementbtn = document.getElementById("increment-btn");
const Headerelement = document.getElementById("peoplecount");
const PassengerCountel = document.getElementById("count-el");
let count = 0;
function IncrementHandler() {
  count += 1;
  Headerelement.innerText = count;
}

function Save() {
  let countval = " " + count + " - ";
  console.log(PassengerCountel.innerText);
  PassengerCountel.innerText += countval;
  console.log(PassengerCountel.innerText);
  Headerelement.innerText = 0;
  count = 0;
}
incrementbtn.addEventListener("click", IncrementHandler);
