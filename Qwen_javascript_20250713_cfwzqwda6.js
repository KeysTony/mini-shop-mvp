function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Геолокация не поддерживается вашим устройством");
  }
}

function showPosition(position) {
  window.lat = position.coords.latitude;
  window.lng = position.coords.longitude;
  document.getElementById("results").innerHTML += "<p>📍 Местоположение получено!</p>";
}