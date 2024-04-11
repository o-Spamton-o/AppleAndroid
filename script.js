document.getElementById("android-btn").addEventListener("click", androidify);

function androidify() {
  document.getElementById("theImage").src = "images/Android-Logo.jpg";
  document.getElementById("exploreBtn").innerHTML = "Android Home";
  document.getElementById("exploreBtn").href = "https://www.android.com";
  document.getElementById("exploreBtn").style.backgroundColor = "#a4c93b";
  document.getElementById("android-btn").classList.add("active");
  document.getElementById("apple-btn").classList.remove("active");
  document.getElementById("bd").style.fontFamily = "Roboto,sans-serif";
}

document.getElementById("apple-btn").addEventListener("click", appleify);

function appleify() {
  document.getElementById("theImage").src = "images/Apple-Logo.jpg";
  document.getElementById("exploreBtn").innerHTML = "Apple Home";
  document.getElementById("exploreBtn").href = "https://www.apple.com";
  document.getElementById("exploreBtn").style.backgroundColor = "#b6bcca";
  document.getElementById("android-btn").classList.remove("active");
  document.getElementById("apple-btn").classList.add("active");
  document.getElementById("bd").style.fontFamily = "Brygada1918,serif";
}
