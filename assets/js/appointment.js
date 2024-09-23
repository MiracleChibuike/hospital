var home_El = document.getElementById("home_Contents");
const home_logo = document.getElementById("logo-home");
var department_El = document.getElementById("departments_El");
var home_now = document.getElementById("Pages");
const load_HomePage = () => {
    console.log(home_now);
    home_El.style.color = "var(--clr-dark-main)";
  window.location.href = "Index.html";
  
};



home_logo.addEventListener("click", (e) => {
  e.preventDefault();
  load_HomePage();
});

// Load About Page
const load_AboutPage = () => {
  window.location.href = "About.html";
};

const load_ContactPage = () => {
  window.location.href = "Contact_Us.html";
};

var re_Direct_Departments = document.getElementById("departments_load");

const load_Department_Page = (e) => {
  console.log(re_Direct_Departments);
  re_Direct_Departments.style.color = "yellow"
  window.location.href = "Departments.html";
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
let Contents_Inner = document.getElementById("appointment");

show_menu.addEventListener("click", () => {
  if ((nav_links.style.display = "none")) {
    nav_links.style.display = "block";
    Contents_Inner.classList.add("animate_Background");
    hide_menu.style.display = "block";
    show_menu.style.display = "none";
  }
});

hide_menu.addEventListener("click", () => {
  if ((nav_links.style.display = "block")) {
    nav_links.style.display = "none";
    Contents_Inner.classList.remove("animate_Background");
    hide_menu.style.display = "none";
    show_menu.style.display = "block";
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


// APPOINTMENT SCRIPTS


// Show Modal

let modal = document.querySelector(".modal");

const modal_Show = () => {
  if (modal.style.display = "none") {
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
  if (modal.style.display = "block") {
    modal.style.display = "none";
    modal.classList.add("animate_Row2");
  }
}
modal_button_remove.addEventListener("click", (e) => {
  e.preventDefault();
  modal_remove()
})
btn_Success.addEventListener("click", () => {
  modal_remove();
})