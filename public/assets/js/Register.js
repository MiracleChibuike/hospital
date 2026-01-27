// Append a border to the Log In Text

// addBorder;

// const addBorder = () => {
//   if (signUpText_Active) {
//     signUpText_Active.classList.add("addBorder");
//   } else {
//     signUpText_Active.classList.remove("addBorder");
//   }
// };

// addBorder();

// import axios from "axios";

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



// Form Controls Code
const Sin_Inform = document.getElementById("Sign_Up_Form");

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

// Update Confirm Password
let hide_password_Confirm = document.getElementById("password_Hide2");
let show_password_Confirm = document.getElementById("password_Visible2");
let password_Confirm = document.getElementById("UserpasswordConfirm");

const showPassword_Confirm = () => { 
  if (password_Confirm.type === "password") {
    password_Confirm.type = "text";
    hide_password_Confirm.style.display = "none";
    show_password_Confirm.style.display = "block";
  }
};
hide_password_Confirm.addEventListener("click", showPassword_Confirm);

const hidePassword_Confirm = () => {
  if (password_Confirm.type === "text") {
    password_Confirm.type = "password";
    hide_password_Confirm.style.display = "block";
    show_password_Confirm.style.display = "none";
  }
};

show_password_Confirm.addEventListener("click", hidePassword_Confirm);

// Populate data for Date of Birth
// Populate for days (1-31)
let dob_day = document.getElementById("dob_day");
document.addEventListener("DOMContentLoaded", () => {
  for (let d = 1; d <= 31; d++) {
    dob_day.innerHTML += `<option value='${d}'>${d}</option>`
  };
})

// Populate for months
let dob_month = document.getElementById("dob_month");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

months.forEach((m, i) => {
  dob_month.innerHTML += `<option value="${i + 1}">${m}</option>`;
});

// Populate for years (1900 - current year)
let dob_year = document.getElementById("dob_year");
const currentYear = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
  for (let y = currentYear; y >= 1900; y--) {
    dob_year.innerHTML += `<option value='${y}'>${y}</option>`;
  }
});




// Register Form Validation
let password_default = document.getElementById("Userpassword")
let password_Message_Val = document.getElementById("val_Passwords")
let userGender = document.getElementById("Gender")
let userAge = document.getElementById("DateOfBirth")
let userFirstName = document.getElementById("FName")
let userLastName = document.getElementById("LName")

// console.log(API_DOMAIN)
let modal_success = document.querySelector(".modal_success");
let succes_inner = document.getElementById("success");
let modal_error = document.querySelector(".modal_error");
let error_inner = document.getElementById("error");
    let userId = null;
    const signUpButton = document.getElementById("login_button");
Sin_Inform.addEventListener("submit", async(e) => {
  e.preventDefault();
   try {
     signUpButton.disabled = true;
     signUpButton.textContent = "Creating account...";
     signUpButton.classList.add("disable_btn");
     const day = document.getElementById("dob_day").value.trim();
     const month = document.getElementById("dob_month").value.trim();
     const year = document.getElementById("dob_year").value.trim();
     if (!day || !month || !year) {
       modal_error.classList.add("showError");
       modal_error.scrollIntoView({ behavior: "smooth" });
       error_inner.innerHTML = `Please select a valid Date of Birth.`;
       setTimeout(() => {
         modal_error.classList.remove("showError");
       }, 7000);
       return;
     }

     // Prevent February 30 or 31, April 31, June 31, September 31, November 31
     const testDate = new Date(year, month - 1, day);
     if (
       testDate.getFullYear() != year ||
       testDate.getMonth() != month - 1 ||
       testDate.getDate() != day
     ) {
         modal_error.classList.add("showError");
         modal_error.scrollIntoView({ behavior: "smooth" });
         error_inner.innerHTML = `Invalid date selected.`;
         setTimeout(() => {
           modal_error.classList.remove("showError");
         }, 7000);
       return;
     }

     // Zero-pad day & month APIs expect YYYY-MM-DD, not YYYY-M-D.
     const paddedDay = String(day).padStart(2, "0");
     const paddedMonth = String(month).padStart(2, "0");
     //  Combine into date string
     const dateOfBirth = `${year}-${paddedMonth}-${paddedDay}`;
     const formData = new FormData(Sin_Inform);
     formData.append("date_of_birth", dateOfBirth);
     //  console.log(formData)
     const userData = Object.fromEntries(formData);
     console.log(`Payload`, userData);

     // console.log(userData);
     const response = await fetch(`${API_DOMAIN}/patient/?request=register`, {
       method: "POST",
       // headers: {
       //   Accept: "application/json",
       //   "Content-Type": "application/json",
       // }, // Removed headers: Application/json because is not needed here as the browser will generate and original is 'multipart/form-data'; boundary=<calculated when request is sent>
       body: formData, // Changed from stringify to userData(FormData) directly
     });
     if (!response.ok) {
       throw new Error(`Registration failed: ${response.status} ${response.statusText}`);
     }
     const result = await response.json();
     console.log(result);

     modal_success.classList.add("show");
     modal_success.scrollIntoView({ behavior: "smooth" });
     succes_inner.textContent = `Success ${result.message}`;
     userId = response.pId;
     console.log(userId);
     setTimeout(() => {
       modal_success.classList.remove("show");
       location.href = `welcome.html`;
     }, 7000);
   } catch (err) {
    console.log(err.message)
    modal_error.classList.add("showError");
    modal_error.scrollIntoView({behavior: 'smooth'});
    error_inner.innerHTML = `${err}`;
    setTimeout(() => {
      modal_error.classList.remove("showError")
    }, 7000)
    console.log(`Error: ${err.message}`)
   }finally{
    signUpButton.disabled = false;
    signUpButton.textContent = "Sign Up";
    signUpButton.classList.remove("disable_btn");
   }
   Sin_Inform.reset(); // Clear all inputs - resets to default
});

password_Confirm.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (password_Confirm.value === password_default.value) {
    password_Message_Val.style.display = "none";
    password_Confirm.style.border = "none";

  }else {
    password_Message_Val.style.display = "block";
    // password_Confirm.style.border = "1px solid red";
  }
});


