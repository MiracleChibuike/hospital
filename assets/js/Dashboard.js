// Retrieve and display the userName on the dashboard page
document.addEventListener("DOMContentLoaded", () => {
  let msg_Welcome = document.querySelector(".Message_D");
  msg_Welcome.style.display = "flex";
  let lastNameContainer = document.querySelector(".Last");
  let f_D = document.querySelector(".FDisplay");

  const firstNameDisplay = document.getElementById("userFirstName");
  const lastNameDisplay = document.getElementById("Lastname");

  const storedFirstName = localStorage.getItem("FirstName");
  const storedLastname = localStorage.getItem("LastName");

  if (storedFirstName && storedLastname) {
   firstNameDisplay.textContent = `${storedFirstName},`;
    lastNameDisplay.textContent = `${storedLastname}`;

    // Apply styles separately
    lastNameDisplay.style.fontWeight = "bold";
    firstNameDisplay.style.fontWeight = "lighter";
    lastNameDisplay.style.position = "relative";
    lastNameDisplay.style.left = "5px";
  }
});


document.addEventListener("DOMContentLoaded", () => {
        let genderUser = document.getElementById("userGender");
      const storeGender = localStorage.getItem("gender");
        if (storeGender) {
            genderUser.textContent = `${storeGender}`;
        }
});

// Prevent Image Dragging
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mousedown", (event) => {
    event.preventDefault();
  });
  img.addEventListener("contextmenu", (event) => {
    event.preventDefault()
  })
})
// Load the Appointment page
// const preview_Appointment = () => {
//   window.location.href = "Appointment.html";
// };