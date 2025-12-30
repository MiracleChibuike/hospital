// Append a border to the Log In Text

// addBorder;
let signUpText_Active = document.getElementById("return_signUp");

// const addBorder = () => {
//   if (signUpText_Active) {
//     signUpText_Active.classList.add("addBorder");
//   } else {
//     signUpText_Active.classList.remove("addBorder");
//   }
// };

// addBorder();

var about_home_logo = document.getElementById("logo-home");
const go_To_Home = () => {
  window.location.href = "index.html";
};

// let log_Text = document.getElementById("return_LogIn");
// const re_direct_Login = () => {
//   window.location.href = "Login.html";
// };
// log_Text.addEventListener("click", re_direct_Login);

let logIn_Text = document.getElementById("log_In");
const load_LoginPage = () => {
  window.location.href = "Login.html";
};

about_home_logo.addEventListener("click", (e) => {
  go_To_Home();
});

const load_HomePage = () => {
  window.location.href = "index.html";
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

// Load the dashboard page once users click on the welcome Button
const welcomeButton = document.getElementById("Welcome_btn");

// Loads an for 1 second animation when a user clicks on the welcome page
  let mainDiv = document.querySelector(".main");
  let loader_Welcome = document.getElementById("header_load");
  let iconsHeader = document.querySelector(".socialIconsHeader");
  let nav_Main = document.querySelector(".main_nav");
  console.log(iconsHeader)
const AnimationLoad = () => {

  // Show Loader Initially
  iconsHeader.style.display = "none";
  nav_Main.style.display = "none"
  loader_Welcome.style.display = "block";

  // After 6 seconds, hide the headre and show the mainDiv
  setTimeout(() => {
    if (mainDiv.style.display = "none") {
        mainDiv.style.display = "block";
        loader_Welcome.style.display = "none";
    }
        window.location.href = "Dashboard.html";
  }, 4000);
};

// Remove the immediate redirection to Dashboard.html
// setTimeout(() => {
// }, 4000);

welcomeButton.addEventListener("click", (e) => {
    window.location.href = "Dashboard.html";
});

// Check whether page loads afetr 3 seconds if a client did not click on the welcome button
const navigateDashboard = () => {
  setTimeout(() => {
    alert("You are being re-directed to your dashboard")
    window.location.href = "Dashboard.html";
  }, 4000)
};

document.addEventListener("DOMContentLoaded", navigateDashboard)

// console.log(mainDiv)

