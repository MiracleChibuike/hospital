


// Loads the animation on a succesful page load

const AnimationLoad = () => {
  const loader = document.querySelector(".loader");
  var headre = document.getElementById("header");
  var mainDiv = document.querySelector(".main");

  // Show Loader Initially
  headre.style.display = "block";

  // Hide loader according to when Page is ready
  if ((mainDiv.style.display = "none")) {
    headre.style.display = "none";
    mainDiv.style.display = "block"
  }
};

// Call the AnimationLoad function when page is ready
document.addEventListener("DOMContentLoaded", AnimationLoad);

// Prevent Image dragging
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mousedown", function (event) {
    event.preventDefault();
  });
  img.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
});

// Header_Top Scroll Effect
window.addEventListener("scroll", function () {
  const header_Top = document.querySelector(".socialIconsHeader");
  if (window.scrollY > 0) {
    header_Top.classList.add("scroll");
  } else {
    header_Top.classList.remove("scroll");
  }
});


const form = document.getElementById("form_main");
const locationInput = document.getElementById("input-location");
const specialityInput = document.getElementById("input-speciality");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Reset border styles initially
  locationInput.style.border = "none";
  specialityInput.style.border = "none";

  if (locationInput.value.trim() === "") {
    alert("Error - Please enter a location");
    locationInput.style.border = "2px solid var(--error-message)";
  } else if (specialityInput.value.trim() === "") {
    alert("Error - Please input a Speciality to continue");
    specialityInput.style.border = "2px solid var(--error-message)";
  } else {
    alert(
      `Your search "${specialityInput.value}" in "${locationInput.value}" did not return any results. Try again later.`
    );
    form.reset();
  }
});

// Validate departmenrts buttons to pop out corresponding container
// Defining containers to hold the departments div
var Cardiology_Dept,
  Neurology_Dept,
  Diagnostics_Dept,
  Dental_Dept,
  Opthalmalogy_Dept,
  Emergency_Dept,
  Oncology_Dept;

Cardiology_Dept = document.getElementById("Cardiology_target");
Neurology_Dept = document.getElementById("Neurology_target");
Diagnostics_Dept = document.getElementById("Diagnostics_target");
Dental_Dept = document.getElementById("Dental_target");
Opthalmalogy_Dept = document.getElementById("Ophthalmology_target");
Emergency_Dept = document.getElementById("Emergency_target");
Oncology_Dept = document.getElementById("Oncology_target");

let btnDepartments = document.querySelectorAll(".btn_dept");
let departments = document.querySelectorAll(".dept");

// optional default
btnDepartments[0]?.classList.add("active");
departments[0]?.classList.add("active");

btnDepartments.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dept = btn.dataset.dept;

    // REMOVE active from ALL buttons
    btnDepartments.forEach((b) => b.classList.remove("active"));

    // REMOVE active from ALL sections
    departments.forEach((section) => section.classList.remove("active"));

    // ADD active to clicked button
    btn.classList.add("active");

    // ADD active to matching section
    document
      .querySelector(`.dept[data-dept="${dept}"]`)
      ?.classList.add("active");
  });
});


// Show Doctors
let allDocs = document.querySelectorAll(".show_docs");
let rightToggle = document.getElementById("right_toggle");
let leftToggle = document.getElementById("left_toggle");
let firstRow = document.querySelector(".first_Row");
let secondRow = document.querySelector(".Second_Row")
// Show Doctors Row (Right)
rightToggle.addEventListener("click", () => {
  rightToggle.classList.add("clickedRow");
  document.getElementById("toggler").classList.remove("clickedRow");
  leftToggle.classList.remove("clickedRow");
  secondRow.classList.add("show_docs");
  firstRow.classList.remove("show_docs");
})
// Show Doctors Row (Left)
leftToggle.addEventListener("click", () => {
  leftToggle.classList.add("clickedRow");
  document.getElementById("toggler").classList.remove("clickedRow");
    rightToggle.classList.remove("clickedRow");
  firstRow.classList.add("show_docs");
  secondRow.classList.remove("show_docs");
});

// Show All Doctors Row
document.getElementById("toggler").addEventListener('click', () => {
  document.getElementById("toggler").classList.add("clickedRow");
  firstRow.classList.add("show_docs");
  secondRow.classList.add("show_docs");
  leftToggle.classList.remove("clickedRow");
  rightToggle.classList.remove("clickedRow");
})
// Show Modal

let modal = document.querySelector(".modal");

const modal_Show = () => {
  if ((modal.style.display = "none")) {
    modal.style.display = "block";
    var main_Content = document.querySelector(".main");
    // main_Content.classList.add("toogle_Body");
    console.log(main_Content);
  }
  // Scroll to the top of the modal
  modal.scrollIntoView({ behavior: "smooth" });
};

const appointment_Form = document.getElementById("appointment_form");

appointment_Form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal_Show();
  appointment_Form.reset();
});

// Remove the Modal

const modal_button_remove = document.getElementById("remove_modal");
const btn_Success = document.getElementById("btn_success");
const modal_remove = () => {
  if ((modal.style.display = "block")) {
    modal.style.display = "none";
    modal.classList.add("animate_Row2");
  }
};
modal_button_remove.addEventListener("click", (e) => {
  e.preventDefault();
  modal_remove();
});
btn_Success.addEventListener("click", () => {
  modal_remove();
});
