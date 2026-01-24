
// Navigate to dashboard
let success_modal = document.querySelector(".modal_success");
let success_msg = document.getElementById("success");
const loadDashbaord = () => {
  setTimeout(() => {
      success_modal.classList.add("show");
      success_modal.scrollIntoView({behavior: "smooth"});
      success_msg.textContent = 'You are now being redirected to your dashboard'
  }, 7000);

};
document.addEventListener("DOMContentLoaded", loadDashbaord)
const addRedirect = () => {
    setTimeout(() => {
      success_modal.classList.remove("show");
      location.href = "Dashboard.html";
    }, 7000);
};
setTimeout(() => {
  addRedirect()
}, 9000);

