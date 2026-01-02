

 // Prevent Image dragging

    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("mousedown", function (event) {
        event.preventDefault();
      });
      img.addEventListener("contextmenu", function (event) {
        event.preventDefault();
      });
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
