var containerElement = document.getElementById("container_example");
var customLeftElement = document.getElementById("custom_left");

var left = containerElement.offsetLeft;
customLeftElement.style.marginLeft = left + "px";

window.addEventListener('resize', function() {
    var left = containerElement.offsetLeft;
    customLeftElement.style.marginLeft = left + "px";
});