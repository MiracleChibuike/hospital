// Retrieve and display the userName on the dashboard page
document.addEventListener("DOMContentLoaded", () => {
  let pageTitle = document.getElementById("page_title");
  let msg_Welcome = document.querySelector(".Message_D");
  msg_Welcome.style.display = "flex";
  let lastNameContainer = document.querySelector(".Last");
  let f_D = document.querySelector(".FDisplay");

  const firstNameDisplay = document.getElementById("userFirstName");
  const lastNameDisplay = document.getElementById("Lastname");

  const storedFirstName = localStorage.getItem("FirstName");
  const storedLastname = localStorage.getItem("LastName");

  if (storedFirstName && storedLastname) {
   firstNameDisplay.textContent = `${storedFirstName}`;
    lastNameDisplay.textContent = `${storedLastname}`;

    // Apply styles separately
    lastNameDisplay.style.fontWeight = "bold";
    firstNameDisplay.style.fontWeight = "lighter";
    lastNameDisplay.style.position = "relative";
    lastNameDisplay.style.left = "5px";
  };
  pageTitle.textContent = `${storedLastname}'s Dashboard || C-Health`
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
});

// Append an active border style to the Home Page of dashboard Desktop
let homeActive = document.querySelector(".home");
const homeText = document.getElementById("HomeText");
const addActiveLink = () => {
  if (homeActive) {
     homeActive.classList.add("active_Nav");
    //  console.log(homeText)
    homeText.style.display = "block";
    homeText.style.fontWeight = "bold"
  }else{
    homeActive.classList.remove("active_Nav");
  }
};

document.addEventListener("DOMContentLoaded", addActiveLink);

// Append an active border style to the Home Page of dashboard Mobile
let divHome_Mobile = document.getElementById("homeDiv");
let textHome_Mobile = document.getElementById("homeTxtMobile");
const appendMobileActive = () => {
  if (divHome_Mobile) {
    divHome_Mobile.classList.add("appendStyle");
    textHome_Mobile.style.fontWeight = "bold"
  }else{
    divHome_Mobile.classList.remove("appendStyle");
  }
};

document.addEventListener("DOMContentLoaded", appendMobileActive)


// Load the Appointment page
// const preview_Appointment = () => {
//   window.location.href = "Appointment.html";
// };