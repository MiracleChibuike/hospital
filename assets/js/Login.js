// Append a border to the Log In Text

// addBorder;
// let Login_Active = document.getElementById("log_In");

// const addBorder = () => {
//   if (Login_Active) {
//     Login_Active.classList.add("addBorder");
//   } else {
//     Login_Active.classList.remove("addBorder");
//   }
// };

// addBorder();

// Redirect to Sign Up page
let signUpText = document.getElementById("return_signUp");
const load_SignUpPage = () => {
  window.location.href = "Register.html"
};

signUpText.addEventListener("click", load_SignUpPage)

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

// const load_ContactPage = () => {
//   window.location.href = "Contact_Us.html";
// };

// var re_Direct_Departments = document.getElementById("departments_load");

// const load_Department_Page = (e) => {
//   console.log(re_Direct_Departments);
//   window.location.href = "Departments.html";
// };

// const load_AboutPage = () => {
//   window.location.href = "About.html";
// };

// const load_BlogPage = () => {
//   window.location.href = "Blog.html";
// };

// // Load the Appointment page
// const preview_Appointment = () => {
//   window.location.href = "Appointment.html";
// };

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

// Prevent back_home Link reload

// Form Controls Code
const form = document.getElementById("log_In_Form");

let hide_password = document.getElementById("password_Hide");
let show_password = document.getElementById("password_Visible");
let password = document.getElementById("Userpassword");

const showPassword = () => {
  if (password.type === "password") {
    password.type = "text";
    hide_password.style.display = "none";
    show_password.style.display = "block";
  }
};

hide_password.addEventListener("click", showPassword);

const hidePassword = () => {
  if (password.type === "text") {
    password.type = "password";
    hide_password.style.display = "block";
    show_password.style.display = "none";
  }
};

show_password.addEventListener("click", hidePassword);


const formValidation = () => {
  const FirstName = document.getElementById("FName")
  const LastName = document.getElementById("LName")
  const password = document.getElementById("Userpassword")
  let formError = document.querySelector(".form_Error");
  // Retrieve values from localStorage
  const storedFirstName = localStorage.getItem("FirstName");
  const storedLastName = localStorage.getItem("LastName");
  const storedPassword = localStorage.getItem("Password");

  if (storedFirstName && storedLastName && storedPassword) {
    // Check if input values match the stored values
    if (
      FirstName.value === storedFirstName &&
      LastName.value === storedLastName &&
      password.value === storedPassword
    ) {
      alert(`Welcome back, ${storedLastName}!`);
      // Optionally redirect to a new page or perform other actions
      window.location.href = "Welcome.html";
    } else if (
      FirstName.value !== storedFirstName ||
      LastName.value !== storedLastName ||
      password.value !== storedPassword
    ) {
      formError.style.visibility = "visible";
      formError.style.transition = "opacity 0.5s ease-in-out";
      formError.style.opacity = "1";
    }
    removeErrorMessage();
  }else {
    alert("No account found. Please sign up first.");
  }
};

// Remove Form Error Message
const removeErrorMessage = () => {
  let formError = document.querySelector(".form_Error");
  setTimeout(() => {
    formError.style.visibility = "hidden";
  }, 7000);
};



form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});
