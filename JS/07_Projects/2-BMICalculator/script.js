const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    results.textContent = "Please enter valid height and weight!";
    results.style.color = "red";
    return;
  }

  const bmi = weight / ((height / 100) * (height / 100));
  let message = `Your BMI is: ${bmi.toFixed(2)} <br>`;

  if (bmi < 18.6) {
    message += "And you are Underweight";
  } else if (bmi > 24.9) {
    message += "And you are Overweight";
  } else {
    message += "And you are in the Normal Range";
  }

  results.innerHTML = message; // Using innerHTML for line breaks
  results.style.color = "white"; // Reset text color
});
