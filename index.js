const btn = document.getElementById("btn");

function calculateAge() {
  const date = document.getElementById("date").value;
  const dob = new Date(date);

  const currentDate = new Date();

  let age = currentDate.getFullYear() - dob.getFullYear();
  const monthDifference = currentDate.getMonth() - dob.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < dob.getDate())
  ) {
    age--;
  }

     document.getElementById("result").innerHTML = "Your age is: " + age;
}

// Passing the CalculateAge function for event handling

btn.addEventListener("click", () => {
  calculateAge();
});
