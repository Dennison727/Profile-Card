// === Display Current Time in Milliseconds ===
const timeElement = document.getElementById('userTime');
function updateTime() {
  timeElement.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

// === Avatar Upload + Persistent Storage ===
const uploadInput = document.getElementById('avatarUpload');
const userAvatar = document.getElementById('userAvatar');
const AVATAR_KEY = 'savedUserAvatar';

// Load avatar from localStorage if available
window.addEventListener('DOMContentLoaded', () => {
  const savedAvatar = localStorage.getItem(AVATAR_KEY);
  if (savedAvatar) {
    userAvatar.src = savedAvatar;
  }
});

// Handle avatar upload
uploadInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageData = e.target.result;
      userAvatar.src = imageData;
      // Save to localStorage
      localStorage.setItem(AVATAR_KEY, imageData);
    };
    reader.readAsDataURL(file);
  }
});