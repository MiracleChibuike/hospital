// Import Axios;


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




// Remove Form Error Message
const removeErrorMessage = () => {
  let formError = document.querySelector(".form_Error");
  setTimeout(() => {
    formError.style.visibility = "hidden";
  }, 7000);
};


let success_Modal = document.querySelector(".modal_success");
let success_Msg = document.getElementById("success");
let modal_Error = document.querySelector(".modal_error");
let error_Msg = document.getElementById("error")
form.addEventListener("submit", async(e) => {
  e.preventDefault();
  const userCredentials = new FormData(form);
  let loginButton = document.getElementById("login_button");
  loginButton.disabled = true;
  loginButton.innerHTML = `Logging in...`;
  try {
    const response = await fetch(
      `${API_DOMAIN}/patient/?request=login`, {
        method: 'POST',
        body: userCredentials,
      }
    );
    if (!response.ok) {
      throw new Error(`Unable to login: ${response.status} ${response.statusText}`);
    };
    console.log(response)
    success_Modal.classList.add("show");
    success_Modal.scrollIntoView({behavior: "smooth"});
    success_Msg.textContent = `${response.message}`;
    setTimeout(() => {
      success_Modal.classList.remove("show");
      location.href = 'dashboard.html'
    }, 8000);
  } catch (err) {
    console.log(err);
    modal_Error.classList.add("showError");
    modal_Error.scrollIntoView({behavior: 'smooth'});
    error_Msg.textContent = `${err.message}`;
    setTimeout(() => {
      modal_Error.classList.remove("showError");
    }, 8000)
  }finally{
    loginButton.disabled = false;
    loginButton.innerHTML = `Log In`;
  }
});
