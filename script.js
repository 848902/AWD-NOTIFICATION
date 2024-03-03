let notificationCount = 0;
const bellContainer = document.getElementById('bell-container');
const bellIcon = document.getElementById('bell-icon');
const notificationCountElement = document.getElementById('notification-count');

bellContainer.addEventListener('click', () => {
  notificationCount++;
  notificationCountElement.innerText = notificationCount;
  bellIcon.classList.add('shake');

  // Remove shake class after animation completes
  setTimeout(() => {
    bellIcon.classList.remove('shake');
  }, 500);
});