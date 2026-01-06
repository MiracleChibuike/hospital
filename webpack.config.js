const path = require("path");

module.exports = {
    //Main JS Entries
  entry: {
    index: "./public/assets/js/index.js",
    about: "./public/assets/js/About.js",
    api_domain: "./public/assets/js/api_domain.js",
    appointment: "./public/assets/js/appointment.js",
    blogs: "./public/assets/js/Blogs.js",
    closeNavOnClick: "./public/assets/js/closeNavOnClick.js",
    contact: "./public/assets/js/Contact.js",
    dashboard: "./public/assets/js/Dashboard.js",
    departments: "./public/assets/js/Departments.js",
    loader: "./public/assets/js/loader.js",
    login: "./public/assets/js/Login.js",
    nav_loader: "./public/assets/js/nav-loader.js",
    register: "./public/assets/js/Register.js",
    welcome: "./public/assets/js/Welcome.js",
  },
  output: {
    filename: "[name].bundle.js", // [name] uses the entry key (e.g., index.bundle.js)
    path: path.resolve(__dirname, "public/assets/js/dist"),
    clean: true
  },
};
