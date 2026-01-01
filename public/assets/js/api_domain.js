// This file gonna help us to make sure that we don't repeat same tasks over and over again
// Check if the device is online =======
function isOnline() {
  return navigator.onLine;
}


// Disable form and page interactions if offline
const disablePage = () => {
  document.body.innerHTML = `
    <div style="text-align: center; margin-top: 20%;">
      <h1>You are offline</h1>
      <p>Try turning on Wi-Fi or mobile data and we'll get you back.</p>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="#af4848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wifi">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
          <line x1="12" y1="20" x2="12.01" y2="20"></line>
        </svg>
      </div>
    </div>
  `;
};

// Check online/offline status on page load
window.addEventListener('load', () => {
    if (!isOnline()) {
        disablePage();
    }
});

// Listen for online/offline changes
window.addEventListener('online', () => {
    location.reload();
});

window.addEventListener('offline', () => {
    disablePage();
});


// Set API domain based on environment =============
// const API_DOMAIN = location.hostname == "localhost" || location.hostname == "127.0.0.1" ? myLocalHost : myProductionHost;

// The above code will help us to be using API_DOMAIN as our localhost