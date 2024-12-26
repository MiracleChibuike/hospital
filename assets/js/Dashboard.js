// Retrieve and display the userName on the dashboard page
document.addEventListener("DOMContentLoaded", () => {
    let msg_Welcome = document.querySelector(".Message_D");
    msg_Welcome.style.display = "flex"
  const userNameDisplay = document.getElementById("userFullName");
  const storedUserName = localStorage.getItem("user");
  if (storedUserName) {
    userNameDisplay.textContent = `${storedUserName}`;
    userNameDisplay.style.fontWeight = "bold";
    userNameDisplay.style.position = "relative";
    userNameDisplay.style.left = "10px"
  }
});

document.addEventListener("DOMContentLoaded", () => {
        let genderUser = document.getElementById("userGender");
      const storeGender = localStorage.getItem("gender");
        if (storeGender) {
            genderUser.textContent = `${storeGender}`;
        }
});


// Load the Appointment page
const preview_Appointment = () => {
  window.location.href = "Appointment.html";
};