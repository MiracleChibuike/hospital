

// Append a border to the Department Text

// addBorder;
let Dept_Active = document.getElementById("departments_El");

const addBorder = () => {
  if (Dept_Active) {
    Dept_Active.classList.add("addBorder");
  }else{
    Dept_Active.classList.remove("addBorder");
  }
}

addBorder();



var home_El = document.getElementById("home_Contents");
const home_logo = document.getElementById("logo-home");
var department_El = document.getElementById("departments_El");
const load_HomePage = () => {
    window.location.href = "Index.html";
    console.log(home_El)
};

const load_BlogPage = () => {
  window.location.href = "Blog.html";
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

// Load the Appointment page
const preview_Appointment = () => {
  window.location.href = "Appointment.html"
}

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
    searchInputDesktop.value = ""
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


// VALIDATE SEARCH FEATURE ON THE HOMEPAGE

// const form = document.getElementById("form_main");
// const locationInput = document.getElementById("input-location");
// const specialityInput = document.getElementById("input-speciality");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Reset border styles initially
//   locationInput.style.border = "none";
//   specialityInput.style.border = "none";

//   if (locationInput.value.trim() === "") {
//     alert("Error - Please enter a location");
//     locationInput.style.border = "2px solid var(--error-message)";
//   } else if (specialityInput.value.trim() === "") {
//     alert("Error - Please input a Speciality to continue");
//     specialityInput.style.border = "2px solid var(--error-message)";
//   } else {
//     alert(
//       `Your search "${specialityInput.value}" in "${locationInput.value}" did not return any results. Try again later.`
//     );
//     form.reset();
//   }
// });


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

//  Defining the buttons for each dept
const button_Cardiology = document.getElementById("Cardiology_Dept");
const button_Neurology = document.getElementById("Neurology_Dept");
const button_Diagnosis = document.getElementById("Diagnostics_Dept");
const button_Dental = document.getElementById("Dental_Dept");
const button_Opthal = document.getElementById("Opthalmalogy_Dept");
const button_Emergency = document.getElementById("Emergency_Dept");
const button_Oncology = document.getElementById("Oncology_Dept");

// showNeurologyDept
const showNewurologyDept = () => {
  if ((Neurology_Dept.style.display = "none")) {
    Neurology_Dept.style.display = "block";
    Cardiology_Dept.style.display = "none";
    Diagnostics_Dept.style.display = "none";
    Dental_Dept.style.display = "none";
    Opthalmalogy_Dept.style.display = "none";
    Emergency_Dept.style.display = "none";
    Oncology_Dept.style.display = "none";
  }
  button_Neurology.style.background = "var(--clr-hospital)";
  button_Neurology.style.color = "var(--clr-white-main)";
  button_Cardiology.style.background = "transparent";
  button_Cardiology.style.color = "var(--clr-dark-main)";
  button_Diagnosis.style.background = "transparent";
  button_Diagnosis.style.color = "var(--clr-dark-main)";
  button_Dental.style.background = "transparent";
  button_Dental.style.color = "var(--clr-dark-main)";
  button_Opthal.style.background = "transparent";
  button_Opthal.style.color = "var(--clr-dark-main)";
    button_Emergency.style.background = "transparent";
    button_Emergency.style.color = "var(--clr-dark-main)";
       button_Oncology.style.background = "transparent";
       button_Oncology.style.color = "var(--clr-dark-main)";
};

button_Neurology.addEventListener("click", (e) => {
  e.preventDefault();
  showNewurologyDept();
});

// Show cardiology Dept
const showCardiologyDept = () => {
  if ((Cardiology_Dept.style.display = "none")) {
    Cardiology_Dept.style.display = "block";
    Neurology_Dept.style.display = "none";
    Diagnostics_Dept.style.display = "none";
    Dental_Dept.style.display = "none";
    Opthalmalogy_Dept.style.display = "none";
    Emergency_Dept.style.display = "none";
    Oncology_Dept.style.display = "none";
  }
  button_Neurology.style.background = "transparent";
  button_Neurology.style.color = "var(--clr-dark-main)";
  button_Cardiology.style.background = "var(--clr-hospital)";
  button_Cardiology.style.color = "var(--clr-white-main)";
  button_Diagnosis.style.background = "transparent";
  button_Diagnosis.style.color = "var(--clr-dark-main)";
  button_Dental.style.background = "transparent";
  button_Dental.style.color = "var(--clr-dark-main)";
  button_Opthal.style.background = "transparent";
  button_Opthal.style.color = "var(--clr-dark-main)";
    button_Emergency.style.background = "transparent";
    button_Emergency.style.color = "var(--clr-dark-main)";
       button_Oncology.style.background = "transparent";
       button_Oncology.style.color = "var(--clr-dark-main)";
};

button_Cardiology.addEventListener("click", (e) => {
  e.preventDefault();
  showCardiologyDept();
});

// Show Diagnostics

const Show_Diagnostics = () => {
  if ((Diagnostics_Dept.style.display = "none")) {
    Diagnostics_Dept.style.display = "block";
    Neurology_Dept.style.display = "none";
    Cardiology_Dept.style.display = "none";
    Dental_Dept.style.display = "none";
    Opthalmalogy_Dept.style.display = "none";
    Emergency_Dept.style.display = "none";
    Oncology_Dept.style.display = "none";
  }
  button_Diagnosis.style.background = "var(--clr-hospital)";
  button_Diagnosis.style.color = "var(--clr-white-main)";
  button_Neurology.style.background = "transparent";
  button_Neurology.style.color = "var(--clr-dark-main)";
  button_Cardiology.style.background = "transparent";
  button_Cardiology.style.color = "var(--clr-dark-main)";
  button_Dental.style.background = "transparent";
  button_Dental.style.color = "var(--clr-dark-main)";
  button_Opthal.style.background = "transparent";
  button_Opthal.style.color = "var(--clr-dark-main)";
    button_Emergency.style.background = "transparent";
    button_Emergency.style.color = "var(--clr-dark-main)";
       button_Oncology.style.background = "transparent";
       button_Oncology.style.color = "var(--clr-dark-main)";
};

button_Diagnosis.addEventListener("click", (e) => {
  e.preventDefault();
  Show_Diagnostics();
});

// Show Dental
const show_Dental = () => {
  if ((Dental_Dept.style.display = "none")) {
    Dental_Dept.style.display = "block";
    Neurology_Dept.style.display = "none";
    Cardiology_Dept.style.display = "none";
    Diagnostics_Dept.style.display = "none";
    Opthalmalogy_Dept.style.display = "none";
    Emergency_Dept.style.display = "none";
    Oncology_Dept.style.display = "none";
  }
  button_Dental.style.background = "var(--clr-hospital)";
  button_Dental.style.color = "var(--clr-white-main)";
  button_Neurology.style.background = "transparent";
  button_Neurology.style.color = "var(--clr-dark-main)";
  button_Cardiology.style.background = "transparent";
  button_Cardiology.style.color = "var(--clr-dark-main)";
  button_Diagnosis.style.background = "transparent";
  button_Diagnosis.style.color = "var(--clr-dark-main)";
  button_Opthal.style.background = "transparent";
  button_Opthal.style.color = "var(--clr-dark-main)";
    button_Emergency.style.background = "transparent";
    button_Emergency.style.color = "var(--clr-dark-main)";
       button_Oncology.style.background = "transparent";
       button_Oncology.style.color = "var(--clr-dark-main)";
};

button_Dental.addEventListener("click", (e) => {
  e.preventDefault();
  show_Dental();
});

// Show Opthalmalogy_Dept
const display_Opthalmalogy = () => {
  if ((Opthalmalogy_Dept.style.display = "none")) {
    Opthalmalogy_Dept.style.display = "block";
    Neurology_Dept.style.display = "none";
    Cardiology_Dept.style.display = "none";
    Diagnostics_Dept.style.display = "none";
    Dental_Dept.style.display = "none";
    Emergency_Dept.style.display = "none";
    Oncology_Dept.style.display = "none";
  }
  button_Opthal.style.background = "var(--clr-hospital)";
  button_Opthal.style.color = "var(--clr-white-main)";
  button_Dental.style.background = "transparent";
  button_Dental.style.color = "var(--clr-dark-main)";
  button_Neurology.style.background = "transparent";
  button_Neurology.style.color = "var(--clr-dark-main)";
  button_Cardiology.style.background = "transparent";
  button_Cardiology.style.color = "var(--clr-dark-main)";
  button_Diagnosis.style.background = "transparent";
  button_Diagnosis.style.color = "var(--clr-dark-main)";
    button_Emergency.style.background = "transparent";
    button_Emergency.style.color = "var(--clr-dark-main)";
       button_Oncology.style.background = "transparent";
       button_Oncology.style.color = "var(--clr-dark-main)";
};

button_Opthal.addEventListener("click", (e) => {
  e.preventDefault();
  display_Opthalmalogy();
});

// Show Emergenncy Dept

const showEmergncyDept = () => {
  if ((Emergency_Dept.style.display = "none")) {
    Emergency_Dept.style.display = "block";
    Neurology_Dept.style.display = "none";
    Cardiology_Dept.style.display = "none";
    Diagnostics_Dept.style.display = "none";
    Dental_Dept.style.display = "none";
    Opthalmalogy_Dept.style.display = "none";
    Oncology_Dept.style.display = "none";
  }
  button_Emergency.style.background = "var(--clr-hospital)";
  button_Emergency.style.color = "var(--clr-white-main)";
    button_Opthal.style.background = "transparent";
    button_Opthal.style.color = "var(--clr-dark-main)";
    button_Dental.style.background = "transparent";
    button_Dental.style.color = "var(--clr-dark-main)";
    button_Neurology.style.background = "transparent";
    button_Neurology.style.color = "var(--clr-dark-main)";
    button_Cardiology.style.background = "transparent";
    button_Cardiology.style.color = "var(--clr-dark-main)";
    button_Diagnosis.style.background = "transparent";
    button_Diagnosis.style.color = "var(--clr-dark-main)";
     button_Oncology.style.background = "transparent";
     button_Oncology.style.color = "var(--clr-dark-main)";
};

button_Emergency.addEventListener("click", (e) => {
  e.preventDefault();
  showEmergncyDept()
})

// Show OncologyDept

const display_OncologyDept = () => {
  if (Oncology_Dept.style.display = "none") {
    Oncology_Dept.style.display = "block";
    Emergency_Dept.style.display = "none";
    Neurology_Dept.style.display = "none";
    Cardiology_Dept.style.display = "none";
    Diagnostics_Dept.style.display = "none";
    Dental_Dept.style.display = "none";
    Opthalmalogy_Dept.style.display = "none";
  }
  button_Oncology.style.background = "var(--clr-hospital)"; 
  button_Oncology.style.color = "var(--clr-white-main)";
   button_Emergency.style.background = "transparent";
   button_Emergency.style.color = "var(--clr-dark-main)";
  button_Opthal.style.background = "transparent";
  button_Opthal.style.color = "var(--clr-dark-main)";
  button_Dental.style.background = "transparent";
  button_Dental.style.color = "var(--clr-dark-main)";
  button_Neurology.style.background = "transparent";
  button_Neurology.style.color = "var(--clr-dark-main)";
  button_Cardiology.style.background = "transparent";
  button_Cardiology.style.color = "var(--clr-dark-main)";
  button_Diagnosis.style.background = "transparent";
  button_Diagnosis.style.color = "var(--clr-dark-main)";
}

button_Oncology.addEventListener("click", (e) => {
    e.preventDefault();
    display_OncologyDept()
})
