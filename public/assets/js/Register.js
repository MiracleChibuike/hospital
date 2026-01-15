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

import axios from "axios";

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


// Register Form Validation
let password_default = document.getElementById("Userpassword")
let password_Message_Val = document.getElementById("val_Passwords")
let userGender = document.getElementById("Gender")
let userAge = document.getElementById("DateOfBirth")
let userFirstName = document.getElementById("FName")
let userLastName = document.getElementById("LName")

// console.log(API_DOMAIN)
Sin_Inform.addEventListener("submit", async(e) => {
  e.preventDefault();
   try {
     const formData = new FormData(Sin_Inform);
     const userData = Object.fromEntries(formData);

    const response = await fetch(
      `${API_DOMAIN}/patient/index.php?request=register`,
      {
        method: "POST",
        headers: {
          Accept: "Application/json",
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result)
   } catch (err) {
    console.log(err)
    console.log(`Base_URL: ${API_DOMAIN}`)
   }

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
// Modal Code
let modal = document.querySelector(".modal_SignUp");
// modal.style.display = "block";

// Remove the modal
let close_modal = document.getElementById("remove_modal");
close_modal.addEventListener("click", () => {
  modal.style.display = "none";
  window.location.href = "Welcome.html";
});

const button_Success = document.getElementById("btn_success");

button_Success.addEventListener("click", () => {
  modal.style.display = "none";
  window.location.href = "Welcome.html";
});

