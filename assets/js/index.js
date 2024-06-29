// Lets load our animation

const AnimationLoad = () => {
    const loader = document.querySelector(".loader");
    var headre = document.getElementById("header");
    var mainDiv = document.querySelector(".main");

    // Show Loader Initially
    headre.style.display = "block";
    mainDiv.style.display = "none"

    // After 6 seconds, hide the headre and show the mainDiv
    setTimeout(() => {
        headre.style.display = "none";
        mainDiv.style.display = "block"
    }, 6000)
}

// Call the AnimationLoad function when page is ready
document.addEventListener("DOMContentLoaded", AnimationLoad)

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
    }

// HideNavSection - Hide_Menu
const HideNavSection = () => {
    if ((search_Container_media.style.display = "block")) {
      search_Container_media.style.display = "none";
      hide_menu.style.display = "block";
    }
    search_Media.style.display = "block";
}

    backHomeLink.addEventListener("click", (event) => {
      backHomeLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        showNavSection(); // Show navigation and hide main content
        // HideNavSection(); 
      });
    });
  });


// Show nav-contents
var show_menu = document.getElementById("displayMenu");
var hide_menu = document.getElementById("hide_menu");
var nav_links = document.querySelector(".nav-links");

show_menu.addEventListener("click", () => {
    if (nav_links.style.display = "none") {
        nav_links.style.display = "block";
        hide_menu.style.display = "block";
        show_menu.style.display = "none";
    }
})

hide_menu.addEventListener("click", () => {
    if (nav_links.style.display = "block") {
        nav_links.style.display = "none";
        hide_menu.style.display = "none";
        show_menu.style.display = "block"
    }
})

var pages = document.getElementById("Pages");
var drop_down = document.querySelector(".drops");
var icon_down = document.getElementById("icon-drops");
var icon_up = document.getElementById("icon-drops-up");
pages.addEventListener("click", () => {
    if (drop_down.style.display === "none") {
        drop_down.style.display = "block";
        icon_up.style.display = "none";
        icon_down.style.display = "block"
    }else{
        drop_down.style.display = "none";
        icon_up.style.display = "block"
        icon_down.style.display = "none"
    }
});


// VALIDATE THE SERCH ICON TO SHOW THE SEARCH INPUT -- (Desktop)
const search = document.querySelector(".getData");
var search_Container = document.querySelector(".search-container-Desktop");

search.addEventListener("click", () => {
   if (search_Container.style.display = "none") {
    search_Container.style.display = "block"
   }
   search.style.display = "none"
})


var searchInputDesktop = document.getElementById("search-input-Desktop");

const searchOnDesktop = () => {
  const searchInputDesktopValue = searchInputDesktop.value.trim();
  if (searchInputDesktopValue === "") {
    alert("Please input a word to search for");
  } else {
    alert(
      `Sorry! We cannot find "${searchInputDesktopValue}" now. You can try searching a different keyword`
    );
    searchInputDesktop.value = ""; // Reset the input field
  }
};

searchInputDesktop.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchOnDesktop(); // Correctly invoke the function
  }
});





// VALIDATE THE SAERCH FEATURE TO SHOW THE SEARCH INPUT -- (MOBILE) - Show_Menu
const search_Media = document.querySelector(".search-icon-media");
var search_Container_media = document.querySelector(".search-container-media");
search_Media.addEventListener("click", () => {
   if (search_Container_media.style.display = "none") {
    search_Container_media.style.display = "block";
    show_menu.style.display = "none"
   }
   search_Media.style.display = "none"
})

search_Media.addEventListener("click", () => {
     if ((search_Container_media.style.display = "none")) {
       search_Container_media.style.display = "block";
       hide_menu.style.display = "none";
     }
     search_Media.style.display = "none";
} )


// Validate the search feature on mobile
var inputSearchMedia = document.getElementById("search-input-media");

// Function to be triggered
const performSearch = () => {
  if (inputSearchMedia.value.trim() === "") {
    alert("Please input a word to search for");
  } else {
    alert(
      `We cannot find "${inputSearchMedia.value}" now. You can try searching a different keyword`
    );
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



// VALIDATE SEARCH FEATURE ON THE HOMEPAGE



const form = document.getElementById("form_main");
const locationInput = document.getElementById("input-location");
const specialityInput = document.getElementById("input-speciality");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Reset border styles initially
  locationInput.style.border = "none";
  specialityInput.style.border = "none";

  if (locationInput.value.trim() === "") {
    alert("Error - Please enter a location");
    locationInput.style.border = "2px solid var(--error-message)";
  } else if (specialityInput.value.trim() === "") {
    alert("Error - Please input a Speciality to continue");
    specialityInput.style.border = "2px solid var(--error-message)";
  } else {
    alert(
      `Your search "${specialityInput.value}" in "${locationInput.value}" did not return any results. Try again later.`
    );
    form.reset();
  }
});
