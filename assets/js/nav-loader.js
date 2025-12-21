

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
  // Add your nav JS logic here, e.g., dropdown toggles, mobile menu
  // Example: Copy from your existing index.js or create shared functions
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
  // Add more nav logic (e.g., mobile menu toggle)

  // Append a border to the Home Text

  // addBorder;
  let home_Active = document.getElementById("home_Contents");
  let aboutUs = document.getElementById("about");
  let departmenrts = document.getElementById("departments_load");
  let blogsPage = document.getElementById("blogs_El");
  let contactPage = document.getElementById("contact_El");
  let loginPage = document.getElementById("log_In");


  const addBorder = () => {
    const currentPath = window.location.pathname;

    if (currentPath.endsWith("index.html") || currentPath === "/") {
        home_Active.classList.add("active");
    } else {
        home_Active.classList.remove("active");
    }   
    if (currentPath.endsWith("about.html")) {
        aboutUs.classList.add("active");
    } else {
        aboutUs.classList.remove("active");
    }
    if (currentPath.endsWith("departments.html")) {
        departmenrts.classList.add("active");
    } else {
        departmenrts.classList.remove("active");
    }
    if (currentPath.endsWith("blogs.html")) {
        blogsPage.classList.add("active");
    } else {
        blogsPage.classList.remove("active");
    }   
    if (currentPath.endsWith("contact.html")) {
        contactPage.classList.add("active");
    } else {
        contactPage.classList.remove("active");
    }
    if (currentPath.endsWith("login.html")) {   
        loginPage.classList.add("active");
    } else {
        loginPage.classList.remove("active");
    }
    };

  addBorder();

}

// Load nav when DOM is ready
document.addEventListener('DOMContentLoaded', loadNav);