

// assets/js/nav-loader.js
async function loadNav() {
    try {
        const response = await fetch('assets/nav.html'); // Adjust path if needed
        if (!response.ok) throw new Error('Failed to load nav');
        const navHtml = await response.text();
        document.getElementById('nav-placeholder').innerHTML = navHtml;
        // Optional: Re-run any nav-specific JS after loading (e.g., event listeners)
        initializeNav(); // Call a function to set up nav interactions
    } catch (error) {
        console.error('Error loading nav:', error);
    }
}

// Function to initialize nav-specific logic (e.g., dropdowns, mobile menu)
function initializeNav() {
  //  Copied from your existing index.js 
  // Show nav-contents
  let show_menu = document.getElementById("displayMenu");
  let hide_menu = document.getElementById("hide_menu");
  let nav_links = document.querySelector(".nav-links");
  let Contents_Inner = document.querySelector(".inner_Contents");

  show_menu.addEventListener("click", () => {
    nav_links.classList.toggle("show_navs");
    Contents_Inner.classList.toggle("animate_Background");
  });

  let pages2 = document.getElementById("Pages");

  document.addEventListener("click", (e) => {
    const show_menu_btn = show_menu;

    if (
      !nav_links.contains(e.target) &&
      e.target !== show_menu_btn &&
      !pages2.contains(e.target)
    ) {
      nav_links.classList.remove("show_navs");
      Contents_Inner.classList.remove("animate_Background");
    }
  });

  let pages = document.getElementById("Pages");
  let drop_down = document.querySelector(".drops");
  let icon_down = document.getElementById("icon-drops");
  let icon_up = document.getElementById("icon-drops-up");
  pages.addEventListener("click", (e) => {
    drop_down.classList.toggle("show");
    icon_down.classList.toggle("hide-icon");
    icon_up.classList.toggle("show-icon");
  });

  // Append a border to the Home Text

  // addBorder;
  let home_Active = document.getElementById("home_Contents");
  let aboutUs = document.getElementById("about");
  let departmenrts = document.getElementById("departments_load");
  let blogsPage = document.getElementById("blogs_El");
  let contactPage = document.getElementById("contact_El");
  let loginPage = document.getElementById("log_In");

    const selectedPages = document.getElementsByClassName("nav-links-mobile");
    console.log(selectedPages);

  // Restore active page from localStorage
  const activePage = localStorage.getItem("activePage");
  for (let i = 0; i < selectedPages.length; i++) {
    if (activePage && selectedPages[i].id === activePage) {
      selectedPages[i].style.fontWeight = "bold";
      selectedPages[i].style.borderBottom = "2px solid var(--clr-white-default)";
    }
  }

for (let i = 0; i < selectedPages.length; i++) {
  selectedPages[i].addEventListener("click", function () {
    // Remove the "active" class from all items
    for (let j = 0; j < selectedPages.length; j++) {
      selectedPages[j].style.fontWeight = "normal";
      selectedPages[j].style.borderBottom = "none";
    }

    // Add the "active" class to the clicked item
    this.style.fontWeight = "bold";
    this.style.borderBottom = "2px solid var(--clr-white-default)";
    
    // Save the active page to localStorage
    localStorage.setItem("activePage", this.id);
  });
}
};


// Load nav when DOM is ready
document.addEventListener('DOMContentLoaded', loadNav);