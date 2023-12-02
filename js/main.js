
window.onload = function() {
  document.getElementById('overlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('overlay').style.display = 'none';
}




function toggleNavbar() {
  var x = document.getElementById("myNavbar");
  if (x.className.indexOf("responsive") === -1) {
    x.className += " responsive";
  } else {
    x.className = x.className.replace(" responsive", "");
  }
}
