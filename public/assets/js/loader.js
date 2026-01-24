// Loads the animation on a succesful page load

const AnimationLoad = () => {
  const loader = document.querySelector(".loader");
  let headre = document.getElementById("header");
  let mainDiv = document.querySelector(".main");

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
