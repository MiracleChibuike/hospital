

// Append a border to the Contact Text

// addBorder;
// let Contact_Active = document.getElementById("contact_El");

// const addBorder = () => {
//   if (Contact_Active) {
//     Contact_Active.classList.add("addBorder");
//   } else {
//     Contact_Active.classList.remove("addBorder");
//   }
// };

// addBorder();

// var about_home_logo = document.getElementById("logo-home");
// const go_To_Home = () => {
//   window.location.href = "index.html";
// };

// about_home_logo.addEventListener("click", (e) => {
//   go_To_Home();
// });

// const load_HomePage = () => {
//   window.location.href = "index.html";
//   console.log(home_El);
// };
// const load_AboutPage = () => {
//   window.location.href = "About.html";
// };

// var re_Direct_Departments = document.getElementById("departments_load");

// const load_Department_Page = (e) => {
//   console.log(re_Direct_Departments);
//   window.location.href = "Departments.html";
// };

// const load_BlogPage = () => {
//   window.location.href = "Blog.html";
// };

// // Load the Appointment page
// const preview_Appointment = () => {
//   window.location.href = "Appointment.html";
// };

// let logIn_Text = document.getElementById("log_In");
// const load_LoginPage = () => {
//   window.location.href = "Login.html";
// };
// Contact Us Scripts

const form_Contact = document.getElementById("Contact_form_handler");

form_Contact.addEventListener("submit", (e) => {
  e.preventDefault();
});
let notice_container = document.querySelector(".notice_message");
let notice_toggle = document.getElementById("notice");

notice_toggle.addEventListener("click", () => {
  if ((notice_container.style.display = "none")) {
    notice_container.style.display = "block";
    notice_container.classList.add("notice_Animate");
  }
});

const close_Notice_Message = document.getElementById("close_notice");

close_Notice_Message.addEventListener("click", () => {
  notice_container.style.display = "none";
});

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

