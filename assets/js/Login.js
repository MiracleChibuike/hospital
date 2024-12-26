// Append a border to the Log In Text

// addBorder;
let Login_Active = document.getElementById("log_In");

const addBorder = () => {
  if (Login_Active) {
    Login_Active.classList.add("addBorder");
  } else {
    Login_Active.classList.remove("addBorder");
  }
};

addBorder();

// Redirect to Sign Up page
let signUpText = document.getElementById("return_signUp");
const load_SignUpPage = () => {
  window.location.href = "Register.html"
};

signUpText.addEventListener("click", load_SignUpPage)

var about_home_logo = document.getElementById("logo-home");
const go_To_Home = () => {
  window.location.href = "Index.html";
};

about_home_logo.addEventListener("click", (e) => {
  go_To_Home();
});

const load_HomePage = () => {
  window.location.href = "Index.html";
  console.log(home_El);
};

const load_ContactPage = () => {
  window.location.href = "Contact_Us.html";
};

var re_Direct_Departments = document.getElementById("departments_load");

const load_Department_Page = (e) => {
  console.log(re_Direct_Departments);
  window.location.href = "Departments.html";
};

const load_AboutPage = () => {
  window.location.href = "About.html";
};

const load_BlogPage = () => {
  window.location.href = "Blog.html";
};

// Load the Appointment page
const preview_Appointment = () => {
  window.location.href = "Appointment.html";
};

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

document.addEventListener("DOMContentLoaded", () => {
  const backHomeLink = document.getElementById("arrow-back-home");
  // ShowNavsection - Show_Menu
  const showNavSection = () => {
    if ((search_Container_media.style.display = "block")) {
      search_Container_media.style.display = "none";
      show_menu.style.display = "block";
    }
    search_Media.style.display = "block";
  };

  // HideNavSection - Hide_Menu
  const HideNavSection = () => {
    if ((search_Container_media.style.display = "block")) {
      search_Container_media.style.display = "none";
      hide_menu.style.display = "block";
    }
    search_Media.style.display = "block";
  };

  backHomeLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    showNavSection(); // Show navigation and hide main content
    // HideNavSection();
  });
});

// Show nav-contents
var show_menu = document.getElementById("displayMenu");
var hide_menu = document.getElementById("hide_menu");
var nav_links = document.querySelector(".nav-links");
let Contents_Inner = document.querySelector(".inner_Contents");

show_menu.addEventListener("click", () => {
  nav_links.classList.toggle("show");
  Contents_Inner.classList.toggle("animate_Background");
  hide_menu.classList.toggle("show");
  show_menu.classList.toggle("hide");
});

hide_menu.addEventListener("click", () => {
  nav_links.classList.toggle("show");
  Contents_Inner.classList.toggle("animate_Background");
  hide_menu.classList.toggle("show");
  show_menu.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
  if (e.target !== nav_links && e.target !== show_menu) {
    nav_links.classList.remove("show");
    Contents_Inner.classList.remove("animate_Background");
    hide_menu.classList.remove("show");
    show_menu.classList.remove("hide");
  }
});

var pages = document.getElementById("Pages");
var drop_down = document.querySelector(".drops");
var icon_down = document.getElementById("icon-drops");
var icon_up = document.getElementById("icon-drops-up");
pages.addEventListener("click", () => {
  if (drop_down.style.display === "none") {
    drop_down.style.display = "block";
    icon_up.style.display = "none";
    icon_down.style.display = "block";
  } else {
    drop_down.style.display = "none";
    icon_up.style.display = "block";
    icon_down.style.display = "none";
  }
});

// VALIDATE THE SERCH ICON TO SHOW THE SEARCH INPUT -- (Desktop)
const search = document.querySelector(".getData");
var search_Container = document.querySelector(".search-container-Desktop");

search.addEventListener("click", () => {
  if ((search_Container.style.display = "none")) {
    search_Container.style.display = "block";
  }
  search.style.display = "none";
});

// Validate the search feature on DESKTOP
var searchInputDesktop = document.getElementById("search-input-Desktop");
// Function to highlight the search term
const highlightSearchTerm_Desktop = (searchTerm_Desktop) => {
  const Desktop_elements = document.querySelectorAll("p, h1, h2, h3, button");
  const regex = new RegExp(`(${searchTerm_Desktop})`, "gi");

  Desktop_elements.forEach((Desktop_element) => {
    Desktop_element.innerHTML = Desktop_element.innerHTML.replace(
      regex,
      '<span class="highlight">$1</span>'
    );
  });
};

const searchOnDesktop = () => {
  const searchTerm_Desktop = searchInputDesktop.value.trim();
  if (searchTerm_Desktop === "") {
    alert("Please input a word to search for");
  } else {
    const found_Desktop = document.body.innerText
      .toLowerCase()
      .includes(searchTerm_Desktop.toLowerCase());
    if (!found_Desktop) {
      alert(
        `We cannot find ${searchTerm_Desktop} now. You can try searching a differnt keyword`
      );
    } else {
      highlightSearchTerm_Desktop(searchTerm_Desktop);
    }
    searchInputDesktop.value = "";
  }
};

searchInputDesktop.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchOnDesktop();
  }
});

// CSS for highlighting
const style_Desktop = document.createElement("style");
style_Desktop.innerHTML = `
  .highlight {
    background-color: yellow;
    color: black;
  }
`;
document.head.appendChild(style_Desktop);

// VALIDATE THE SAERCH FEATURE TO SHOW THE SEARCH INPUT -- (MOBILE) - Show_Menu
const search_Media = document.querySelector(".search-icon-media");
var search_Container_media = document.querySelector(".search-container-media");
search_Media.addEventListener("click", () => {
  if ((search_Container_media.style.display = "none")) {
    search_Container_media.style.display = "block";
    show_menu.style.display = "none";
  }
  search_Media.style.display = "none";
});

search_Media.addEventListener("click", () => {
  if ((search_Container_media.style.display = "none")) {
    search_Container_media.style.display = "block";
    hide_menu.style.display = "none";
  }
  search_Media.style.display = "none";
});

// Validate the search feature on mobile
var inputSearchMedia = document.getElementById("search-input-media");

// Function to highlight the search term
const highlightSearchTerm = (searchTerm) => {
  const elements = document.querySelectorAll("p, h1, h2, h3, button");
  const regex = new RegExp(`(${searchTerm})`, "gi");

  elements.forEach((element) => {
    element.innerHTML = element.innerHTML.replace(
      regex,
      '<span class="highlight">$1</span>'
    );
  });
};

// Function to be triggered
const performSearch = () => {
  const searchTerm = inputSearchMedia.value.trim();
  if (searchTerm === "") {
    alert("Please input a word to search for");
  } else {
    const found = document.body.innerText
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (!found) {
      alert(
        `We cannot find "${searchTerm}" now. You can try searching a different keyword`
      );
    } else {
      highlightSearchTerm(searchTerm);
    }
    inputSearchMedia.value = "";
  }
};

// Calling the search function when user presses Enter
inputSearchMedia.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission behavior
    performSearch();
  }
});

// CSS for highlighting
const style = document.createElement("style");
style.innerHTML = `
  .highlight {
    background-color: yellow;
    color: black;
  }
`;
document.head.appendChild(style);

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

// Form Validation
const formValidation = () => {
  const userName = document.getElementById("userName");
  const password = document.getElementById("Userpassword");
  const storeLocal = localStorage.setItem("user", userName.value);
  const storePassLocal = localStorage.setItem("userPassword", password.value);
  if (userName.value.trim() != "" && password.value.trim() != "") {
    alert(`Welcome back ${userName.value}`);
    console.log(localStorage.getItem("user"));
    console.log(localStorage.getItem("userPassword"))
    form.reset();
      window.location.href = "Welcome.html";
  }
};

// Retrieve and display the userName on the dashboard page
document.addEventListener("DOMContentLoaded", () => {
  const userNameDisplay = document.getElementById("userNameDisplay");
  const storedUserName = localStorage.getItem("user");
  const storeGender = localStorage.getItem("gender")
  if (storedUserName) {
    userNameDisplay.textContent = `Welcome, ${storedUserName}`;
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});
