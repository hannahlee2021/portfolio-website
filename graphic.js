const imageButton = document.getElementById('imageButton');
const sidebar = document.getElementById('sidebar');

imageButton.addEventListener('click', function() {
  sidebar.classList.toggle('open');
});