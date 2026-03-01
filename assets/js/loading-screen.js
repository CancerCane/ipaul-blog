document.addEventListener('DOMContentLoaded', function() {
  var loader = document.getElementById('loading-screen');
  if (loader) {
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 600);
    setTimeout(function() {
      loader.style.display = 'none';
    }, 1100);
  }
});
