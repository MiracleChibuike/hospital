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


// VALIDATE THE SAERCH FEATURE TO SHOW THE SEARCH INPUT -- (MOBILE)
const search_Media = document.querySelector(".search-icon-media");
var search_Container_media = document.querySelector(".search-container-media");
search_Media.addEventListener("click", () => {
   if (search_Container_media.style.display = "none") {
    search_Container_media.style.display = "block"
   }
   search_Media.style.display = "none"
})

// VALIDATE SEARCH FEATURE ON THE HOMEPAGE

const form = document.querySelector("form");
const location_Input = document.getElementById("input-location");
const speciality_Input = document.getElementById("input-speciality");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    if (location_Input.value == "")  {
        alert("Error - Please enter a location")
        location_Input.style.border = "2px solid var(--error-message)";
    }
    else if (speciality_Input.value == "") {
        alert("Error - Please input a Speciality to continue");
        speciality_Input.style.border = "2px solid var(--error-message)";
    }
    else{
        alert (`Your search "${speciality_Input.value}" in "${location_Input.value}" did not 
        return any results \n Try again Later`)
         location_Input.style.border = "none";
         speciality_Input.style.border = "none";
        form.reset()
    }

    // console.log(location_Input.value);
    // console.log(speciality_Input.value)
})