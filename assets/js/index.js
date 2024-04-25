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
const glass_Desktop = document.getElementById("small-glass-search");
var search_Input_Desktop = document.getElementById("search-input-Desktop");
glass_Desktop.addEventListener("click", () => {
      if (search_Input_Desktop.value == "") {
        alert("Please input a word to search for")
    }else if (search_Input_Desktop.value.length <= 10) {
        alert(`"${search_Input_Desktop.value}" is not up to 11 characters. Try searching words more than 10 charcaters`)
        search_Input_Desktop.value = "";
    }
    else
    {
        alert(` Sorry! We cannot find "${search_Input_Desktop.value}" now. You can try searching a different keyword`)
        search_Input_Desktop.value = "";
    }
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
const glass_Media = document.getElementById("glass-media");
var inputSearch_media = document.getElementById("search-input-media");
glass_Media.addEventListener("click", () => {
    if (inputSearch_media.value == "") {
        alert("Please input a word to search for")
    }else if (inputSearch_media.value.length <= 10) {
        alert(`"${inputSearch_media.value}" is not up to 11 characters. Try searching words more than 10 charcaters`)
        inputSearch_media.value = "";
    }
    else
    {
        alert(` We cannot find "${inputSearch_media.value}" now. You can try searching a different keyword`)
        inputSearch_media.value = "";
    }
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