// Loads the animation on a succesful page load

const AnimationLoad = () => {
  const loader = document.querySelector(".loader");
  var headre = document.getElementById("header");
  var mainDiv = document.querySelector(".main");

  // Show Loader Initially
  headre.style.display = "block";

  // Hide loader according to when Page is ready
  if ((mainDiv.style.display = "none")) {
    headre.style.display = "none";
    mainDiv.style.display = "block";
  }
};

// Call the AnimationLoad function when page is ready
document.addEventListener("DOMContentLoaded", AnimationLoad);
